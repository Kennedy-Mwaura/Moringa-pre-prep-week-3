let packingList = [];

packingList.push("binoculars");

packingList.push("journal");
packingList.push("camera");
packingList.push("touristy hat");
console.log(packingList); // ["binoculars", "journal", "camera", "touristy hat"]

// To add an item to the top of the list use the .unshift()
packingList.unshift("sunglasses")

packingList.unshift("money");

console.log(packingList);

let stationery = ["Book", "Pencil", "Pen"];

let snacks = ["Chocolate", "Crisps", "2 juice boxes"];
// we join lists using the .concat() method

shoppingList = stationery.concat(snacks);

console.log(shoppingList);

// Joining Multiple lists
let birds = ["Parrots", "Owls", "Penguin"];
let reptiles = ["Lizards", "Turles", "Dinosaur"];
let amphibians = ["frogs", "salamander", "Caudata"];
let mammals = ["Humans", "Elephants", "Sloths"];
let animals = [];
animals = animals.concat(birds, reptiles, amphibians, mammals);
console.log(animals)

// Turning arrays to strings 
let movies= ["Avengers", "Batman", "Black Panther"];
console.log(movies.join())