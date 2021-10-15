const queryInput = document.querySelector("#query");
//const searchForm = document.querySelector("#search-form");
const list = document.querySelector("#list");
const thumbnails = document.querySelector("#thumbnails");
const details = document.querySelector("#details");
let hideMeButton = document.querySelector("#hide-me");
const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");
const restartButton = document.querySelector("#restart");

var currentPage = 1;
var imageQuery = "recent";
var tag = "";

const getImages = async (action, tags) => {
  console.log(currentPage);
  while (thumbnails.hasChildNodes()) {
    thumbnails.removeChild(thumbnails.firstChild);
  }

  if (imageQuery === "first") {
    currentPage = 1;
    imageQuery = "recent";
  } else if (imageQuery !== action && action === "tags") {
    tag = tags;
    currentPage = 1;
    imageQuery = "tags";
  } else if (imageQuery !== action && action === "recent") {
    imageQuery = "recent";
    tag = "";
    currentPage = 1;
  } else if ((action = "tags" && tags !== tag)) {
    tag = tags;
    currentPage = 1;
  }

  let response;
  if (imageQuery === "recent") {
    response = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=25&api_key=244003ddf73f37254d5631da9fa91bed&page=${currentPage}&format=json&nojsoncallback=1`
    );
  } else if (imageQuery === "tags") {
    response = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=244003ddf73f37254d5631da9fa91bed&tags=${tag}&page=${currentPage}&per_page=25&format=json&nojsoncallback=1`
    );
  }
  const data = await response.json();
  //  console.log(data);
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
    img.setAttribute("class", "tiny");
    thumbnails.appendChild(img);
  });
};

getImages("first");

const appendDetails = (key, value, element) => {
  let elementToAdd = document.createElement("p");
  elementToAdd.innerHTML = `${key} : ${value}`;
  element.appendChild(elementToAdd);
};

const imageDetails = async (server, id, secret) => {
  details.style.display = "block";
  while (details.childElementCount > 1) {
    details.removeChild(details.lastChild);
  }
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
  //  console.log(data.photo);
  appendDetails("Title: ", data.photo.title._content, details);
  appendDetails("User real name:", data.photo.owner.realname, details);
  appendDetails("Photo taken", data.photo.dates.taken, details);

  // Tags...
  let tags = data.photo.tags.tag;
  //  console.log(tags);
  appendDetails("Tags: ", tags.length === 0 ? "none" : tags.length, details);
  let ul = document.createElement("ul");
  tags.forEach((tag) => {
    let element = document.createElement("li");
    element.innerHTML = tag.raw;
    element.setAttribute("onClick", `getImages('tags', '${tag.raw}')`);
    ul.appendChild(element);
  });
  details.appendChild(ul);
};

nextButton.addEventListener("click", (e) => {
  e.preventDefault();
  currentPage++;
  getImages(imageQuery, tag);
});

previousButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentPage > 1) {
    currentPage--;
    getImages(imageQuery, tag);
  }
});

hideMeButton.addEventListener("click", (e) => {
  e.preventDefault();
  details.style.display = "none";
});

restartButton.addEventListener("click", (e) => {
  e.preventDefault();
  details.style.display = "none";
  currentPage = 1;
  imageQuery = "recent";
  getImages(imageQuery);
});

// searchForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const query = queryInput.value;
//   getImages(query);
// });
