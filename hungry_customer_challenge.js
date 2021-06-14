let bun = true;
let patty = true;
let cheese = true;
let veggie = true;
let mayonnaise = true;
let ketchup = true;


let order = bun && patty && cheese && veggie && (ketchup || mayonnaise);
let happyCustomer = order // true for happy customer, false for angry customer

console.log(happyCustomer);
let order2 = bun && patty && cheese && (ketchup || mayonnaise);
happyCustomer = order2;
console.log(happyCustomer);