// create objects 
let person = {
    name : "Zoo",
    gang :"slime",
    gender: "male"   
}

console.log(person);

let person2 = {
	name : "Wambui Kinyua",
	age : 16,
	gender : "Female",
	hobbies : ["Dancing", "Reading", "Nature trails", "Cooking"],
	}
// We access properties using the dot notation 
console.log(person2.name)

// Adding values to objects using the dot notation
person.isAwesome = true;
person2.eyecolor = "brown";

console.log(person2);
delete person2.eyecolor;

console.log(person2);

// Nested objects 
let person3 = {
	name : "Wambui Kinyua",
	age : 16,
	gender : "Female",
	hobbies : ["Dancing", "Reading", "Nature trails", "Cooking"],
	isAwesome : true,
	sibling: { //this is the nested object
                  name : "Mwangi Kinyua",
                  age :  13,
            }
    };

console.log(person3.sibling.age)