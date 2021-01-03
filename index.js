const kwonInfo = {
  name : "kwon",
  age : 23,
  girlfriend : true,
  favoriteFood: ["apple", "meat", "steak"],
  favoriteMovie: [
    {
      name: "parasite",
      genre: "thriller"
    },
    {
      name: "No Country for Oldman",
      genre: "thriller"
    }
  ]
}

console.log(kwonInfo.favoriteFood[2]);
console.log(kwonInfo.favoriteMovie[0].name);
console.log(kwonInfo.age);