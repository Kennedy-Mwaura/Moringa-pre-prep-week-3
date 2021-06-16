let radius = 45;

let circ = 2 * Math.PI * radius;
finalValue = Math.ceil(circ) // ceil rounds up to the nearest interger 
console.log(finalValue);

circumference = function (r) {
    circ = 2 * Math.PI * r ; 
    return circ
}
rad = 67.5;
fv = circumference(rad)

fv2 = Math.floor(fv)
console.log(fv2)

let power = Math.pow(4, 15);
console.log(power)

// Square root
console.log(Math.sqrt(64))

// Maximum value in a list of args
let Maximum = Math.max(45,-76, 86, 7, 1,1024, 67)
console.log(Maximum)

primeArray = [];
max_prime = function () {
    for (i=0; i <=100; i++) {
        if (i%2==0) {
            x = i;
            primeArray.push(x);
        }
    }
    return primeArray
}
console.log(max_prime())
console.log(Math.max(...primeArray))
for (let x of primeArray) {
    //console.log(Math.max(x))
}

// Random number
console.log(Math.random());
random_number = Math.random() * 1000;
console.log(Math.round(random_number));