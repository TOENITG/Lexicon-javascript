const queryInput = document.querySelector("#query");
// const searchForm = document.querySelector("#search-form");
const list = document.querySelector("#list");
const thumbnails = document.querySelector("#thumbnails");
const details = document.querySelector("#details");
const hideMeButton = document.querySelector("#hide-me");
const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");

var currentPage = 1;

const getImages = async (imageQuery) => {
  while (thumbnails.hasChildNodes()) {
    thumbnails.removeChild(thumbnails.firstChild);
  }

  const response = await fetch(
    `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=25&api_key=244003ddf73f37254d5631da9fa91bed&page=${currentPage}&format=json&nojsoncallback=1`
  );
  const data = await response.json();
  console.log(data);
  data.photos.photo.forEach((photo) => {
    let img = document.createElement("img");
    img.setAttribute(
      "src",
      `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`
    );
    img.setAttribute(
      "onClick",
      `imageDetails('${photo.server}', '${photo.id}', '${photo.secret}')`
    );
    thumbnails.appendChild(img);
  });
};

getImages();

const appendDetails = (key, value, element) => {
  let elementToAdd = document.createElement("p");
  elementToAdd.innerHTML = `${key} : ${value}`;
  element.appendChild(elementToAdd);
};

const imageDetails = async (server, id, secret) => {
  details.style.display = "block";
  while (details.hasChildNodes()) {
    details.removeChild(details.firstChild);
  }
  /*  <button id="hide-me">Hide Me</button>*/
  let button = document.createElement("button");
  button.setAttribute("id", "hide-me");
  button.innerHTML = "Hide me";
  details.appendChild(button);

  let img = document.createElement("img");
  img.setAttribute(
    "src",
    `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`
  );
  details.appendChild(img);
  const response = await fetch(
    `https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=244003ddf73f37254d5631da9fa91bed&photo_id=${id}&secret=${secret}&format=json&nojsoncallback=1`
  );
  const data = await response.json();
  console.log(data.photo);
  appendDetails("Title: ", data.photo.title._content, details);
  appendDetails("User real name:", data.photo.owner.realname, details);
  appendDetails("Photo taken", data.photo.dates.taken, details);

  // Tags...
  let tags = data.photo.tags.tag;
  console.log(tags);
  appendDetails("Tags: ", tags.length === 0 ? "none" : tags.length, details);
  let ul = document.createElement("ul");
  tags.forEach((tag) => {
    let element = document.createElement("li");
    element.innerHTML = tag.raw;
    ul.appendChild(element);
  });
  details.appendChild(ul);
};

nextButton.addEventListener("click", (e) => {
  e.preventDefault();
  currentPage++;
  getImages();
});

previousButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentPage > 1) {
    currentPage--;
    getImages();
  }
});

hideMeButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("here");
  document.getElementById("details").style.display = "none";
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = queryInput.value;
  getImages(query);
});
