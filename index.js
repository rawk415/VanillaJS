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

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  multiple: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  },
  time: function(a, b) {
    let c = a;

    if(b == 0) {
      return 0;
    } else if(b<0) {
      return false;
    }

    for(let i=1; i < b; i++) {
    c = c * a;
    }
    return c;
    
  }
}
console.log(calculator.time(2, 10));
console.log(`5+4=${calculator.plus(5,4)}, 5/2=${calculator.divide(5, 2)}`);