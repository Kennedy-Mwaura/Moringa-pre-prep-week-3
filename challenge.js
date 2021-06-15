let animals = {};

animals = {
    zebra: {
        classification: "Mammal",
        appearance : ["White with black stripes", "4 legs", "Looks likea donkey"],
        habitat: "Grasslands",
        "lifespan (Years)": 25,
        diet : "Herbivore",
        friendly : true
 
}, // Remember to separate nested objects with commas
crocodile : {
    classification: "Reptile",
    appearance : ["Long, Wide mouth with many teeth", "Close relatives with dinosaurs", 
    "Looks like a big lizard"],
    habitat : "Grasslands",
    lifespan : 100,
    diet :"carnivore",
    friendly: false

}
};
let ostrich = {
    classification: "Bird",
    appearance: ["Big tall bird", "2 legs", "Has a long neck"],
    habitat: "Grasslands",
    lifespan: 45,
    diet: "Herbivore",
    friendly: true
}; 

animals.ostrich = ostrich; 
console.log(animals)

shark = {
    classification: "Fish",
    appearance : ["sharp teeth", "Has fins", "Has gills"],
    habitat : "water",
    lifespan : 30,
    diet : "carnivore",
    friendly : true,
};
animals.shark = shark;
console.log (animals)

