let friends = [{name: "Kiro",
age : 15},
{
    name: "Patty",
    age :17
},
{
    name: "Sandy",
    age : 14
}]; 

console.log(friends[2].name);

let kiro = {
    name: "Kiro",
    age: 15,
    favoriteAnimals: ["Duck", "Monkey", "Whale"]
   };
let patty = {
    name: "Patty",
    age: "17",
    favoriteAnimals: ["Snake", "Lion", "Zebra"]
   };
let sandy = {
    name: "Sandy",
    age: "16",
    favoriteAnimals: ["Flamingo", "Chicken", "Gecko"]
   };

let bfriends = [kiro, patty, sandy]

console.log(bfriends[0].favoriteAnimals[2])