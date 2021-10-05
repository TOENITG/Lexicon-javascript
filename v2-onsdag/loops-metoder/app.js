const songs = [
  {
    artist: "Nirvana",
    album_name: "Trash",
    tracks: ["track 1", "track 2", "track 3", "track 4"],
    track_number: 4,
  },
  {
    artist: "Meet Puppets",
    albumn_ame: "Back Border",
    tracks: ["track 1", "track 2", "track 3", "track 4"],
    track_number: 4,
  },
  {
    artist: "The Muppets",
    album_name: "Christmas Forever",
    tracks: ["track 1", "track 2", "track 3", "track 4"],
    track_number: 4,
  },
  {
    artist: "Electric Banana Band",
    album_name: "Favoriter",
    tracks: [
      "Signaturmelodi",
      "Min piraya Maja",
      "Jag vill bo i en svamp",
      "Olyckan",
    ],
    track_number: 3,
  },
];

//console.log(songs);
//console.table(songs);

songs.forEach((value, index) => {
  console.log(index);
  console.log(value);
});

console.clear();

songs.map((value, index) => {
  let artist = value;
  console.log(index);
  console.log(artist);
});

console.clear();

for (let i = 0; i < songs.length; i++) {
  const album = songs[i];
  console.log(i);
  console.log(album);
}
