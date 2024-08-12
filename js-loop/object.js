const album1989 = {
  title: "1989",
  releaseDate: "October 27, 2023",
  genre: ["Pop"],
  label: "Republic Records",
  singles: [
    "Shake It Off",
    "Blank Space",
    "Style",
    "Bad Blood",
    "Wildest Dreams",
    "Wonderland",
  ],
};
console.log(album1989);
console.log("release date:", album1989["releaseDate"]);
console.log("title", album1989.title);
const key = "label";
console.log(key, ":", album1989[key]);
console.log("--------------------------------------");
//-----------------For IN---------------------(going to the key in the object)
for (const property in album1989) {
  console.log("Property", property, ":", album1989[property]);
}
//i want to go through my singles(blank space)

//console.log("singles:", album1989.singles[1]);
//------------one by one---------

console.log("singles:", album1989.singles);
const singles = album1989.singles;

//is of bc album1989 is an array
for (const single of album1989.singles) {
  console.log("singles:", singles);
}
