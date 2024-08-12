const taylorSwiftAlbums = [
  {
    title: "Taylor Swift",
    releaseDate: "October 24, 2006",
    genre: ["Country", "Country pop"],
    label: "Big Machine Records",
    singles: ["Tim McGraw", "Teardrops on My Guitar", "Our Song"],
  },
  {
    title: "Fearless TV",
    releaseDate: " April 9, 2021",
    genre: ["Country", "Country pop"],
    label: "Republic Records",
    singles: ["Love Story", "White Horse", "You Belong with Me"],
  },
  {
    title: "Speak Now TV",
    releaseDate: "July 7, 2023",
    genre: ["Country pop"],
    label: "Republic Records",
    singles: ["Mine", "Back to December", "Mean", "The Story of Us"],
  },
  {
    title: "Red TV",
    releaseDate: "November 12, 2021",
    genre: ["Pop", "Country pop"],
    label: "Republic Records",
    singles: [
      "We Are Never Ever Getting Back Together",
      "Begin Again",
      "I Knew You Were Trouble",
    ],
  },
  {
    title: "1989 TV",
    releaseDate: " October 27, 2023",
    genre: ["Pop"],
    label: "Republic Records",
    singles: [
      "Shake It Off",
      "Blank Space",
      "Style",
      "Bad Blood",
      "Wildest Dreams",
    ],
  },
  {
    title: "Reputation",
    releaseDate: "November 10, 2017",
    genre: ["Pop"],
    label: "Big Machine Records",
    singles: [
      "Look What You Made Me Do",
      "...Ready for It?",
      "End Game",
      "Delicate",
    ],
  },
  {
    title: "Lover",
    releaseDate: "August 23, 2019",
    genre: ["Pop"],
    label: "Republic Records",
    singles: ["Me!", "You Need to Calm Down", "Lover", "The Man"],
  },
  {
    title: "Folklore",
    releaseDate: "July 24, 2020",
    genre: ["Indie folk", "Alternative rock"],
    label: "Republic Records",
    singles: ["Cardigan", "The 1", "Exile", "Betty"],
  },
  {
    title: "Evermore",
    releaseDate: "December 11, 2020",
    genre: ["Indie folk", "Alternative rock"],
    label: "Republic Records",
    singles: ["Willow", "No Body, No Crime", "Coney Island"],
  },
];

// console.log(taylorSwiftAlbums);
// console.log(taylorSwiftAlbums[0].title);

let property = "title";
console.log(taylorSwiftAlbums[0][property]);

//want to log all key and its value of the ist object of my arry
for (const key in taylorSwiftAlbums[0]) {
  console.log(key, ".", taylorSwiftAlbums[0][key]);
}

//i want
for (const album of taylorSwiftAlbums) {
  console.log(album); //going through each element
  for (const key in album) {
    console.log(key, ".", album[key]);
  }
}
