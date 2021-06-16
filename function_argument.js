let greeting = function (name){
    console.log("Hello " + name + "!");
}; 

greeting("Zoo")

neverGiveUp = function (easy) {
    console.log("Never give up on " + easy + "!");
};
neverGiveUp("Life")

let jumpingJacks =  function (numberOfTimes, whatToDo){
    for (let i = 1; i < numberOfTimes; i++){
        console.log(i + " " + whatToDo);
    }
};
jumpingJacks(13, "Jump over the puddle")