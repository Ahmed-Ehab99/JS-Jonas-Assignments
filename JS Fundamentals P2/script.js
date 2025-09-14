// Assignment 1
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const descCountry1 = describeCountry("Egypt", 100, "cairo");
const descCountry2 = describeCountry("USA", 50, "LA");
const descCountry3 = describeCountry("France", 100, "paris");
console.log(descCountry1);
console.log(descCountry2);
console.log(descCountry3);
/////////////////////////////////////////////////
// Assignment 2
const worldPopulation = 7900;
function percentageOfWorld1(population) {
  return `${((population / worldPopulation) * 100).toFixed(1)}%`;
}
const country1 = percentageOfWorld1(1005);
const country2 = percentageOfWorld1(1441);
const country3 = percentageOfWorld1(2341);
console.log(country1);
console.log(country2);
console.log(country3);
const percentageOfWorld2 = function (population) {
  return `${((population / worldPopulation) * 100).toFixed(1)}%`;
};
const country4 = percentageOfWorld2(6323);
const country5 = percentageOfWorld2(1936);
const country6 = percentageOfWorld2(2225);
console.log(country4);
console.log(country5);
console.log(country6);
/////////////////////////////////////////////////
// Assignment 3
const percentageOfWorld3 = (population) => {
  return `${((population / worldPopulation) * 100).toFixed(1)}%`;
};
const country7 = percentageOfWorld3(4231);
const country8 = percentageOfWorld3(7163);
const country9 = percentageOfWorld3(6281);
console.log(country7);
console.log(country8);
console.log(country9);
/////////////////////////////////////////////////
// Assignment 4
const describePopulation = (country, population) => {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage} of the world`;
};
const descPopulation1 = describePopulation("China", 1441);
const descPopulation2 = describePopulation("Egypt", 100);
const descPopulation3 = describePopulation("France", 90);
console.log(descPopulation1);
console.log(descPopulation2);
console.log(descPopulation3);
/////////////////////////////////////////////////
// Assignment 5
const populations = [1441, 100, 2736, 523];
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);
/////////////////////////////////////////////////
// Assignment 6
const neighbours = ["Egypt", "France", "USA"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central european country :D");
}
neighbours[neighbours.indexOf("Egypt")] = "Republic of Sweden";
console.log(neighbours);
/////////////////////////////////////////////////
// Assignment 7
const myCountry = {
  country: "Egypt",
  capital: "cairo",
  language: "arabic",
  population: 100,
  neighbours,
};
console.log(myCountry);
const info = `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`;
console.log(info);
myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry["population"]);
/////////////////////////////////////////////////
// Assignment 8
myCountry.describe = function () {
  return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
};
console.log(myCountry);
console.log(myCountry.describe());
myCountry.checkIsland = function () {
  this.isIsland = myCountry.neighbours.length === 0 ? true : false;
  return this.isIsland;
};
console.log(myCountry.checkIsland());
/////////////////////////////////////////////////
// Assignment 9
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}
/////////////////////////////////////////////////
// Assignment 10
let percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages);
console.log(percentages2);
/////////////////////////////////////////////////
// Assignment 11
let listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(listOfNeighbours[i][j]);
  }
}
/////////////////////////////////////////////////
// Assignment 12
let percentages3 = [];
let index = 0;
while (index < listOfNeighbours.length) {
  percentages3.push(percentageOfWorld1(populations[index]));
  index++;
}
console.log(percentages3);
