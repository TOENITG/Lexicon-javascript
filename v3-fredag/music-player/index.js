const audio = document.querySelector("#audio-player");
const queryInput = document.querySelector("#query");
const searchForm = document.querySelector("#music-form");
const lista = document.querySelector("#lista");

let token = "";

async function getToken() {
  const response = await fetch(
    "https://blooming-reef-63913.herokuapp.com/api/token"
  );
  const data = await response.json();
  token = data.token;
}

getToken();

async function getSongs(song) {
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${song}&type=track`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  //  console.log(data);
  for (let i = 0; i < data.tracks.items.length; i++) {
    // här skapar vi en li
    const songItem = document.createElement("li");
    songItem.innerHTML = `${data.tracks.items[i].name} <button class="tracks" data-song="${data.tracks.items[i].preview_url}">Play</button>`;
    lista.append(songItem);
  }
  const playButtons = document.querySelectorAll(".tracks");
  for (let i = 0; i < playButtons.length; i++) {
    playButtons[i].addEventListener("click", (event) => {
      console.log(event.target.dataset.song);
      playSong(event.target.dataset.song);
    });
  }
}

function playSong(song) {
  if (song === "null") {
    audio.pause();
    alert("Song coud not be played!");
  } else {
    audio.src = song;
    audio.play();
  }
}

// hantera det vi söker
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = queryInput.value;
  getSongs(query);
});
