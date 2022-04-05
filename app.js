//  --->GLOBAL VARIABLES<--- //
let age = 0
let ageValue= document.getElementById('age');


//sample counter method --->
// set one get age count that increments: then displays Age on the screen.


// AGE INCREMENTER ------>


console.log(ageValue)


setInterval(()=>{
    age++
    ageValue.innerHTML = age;
}, 10000)

// age increasing by 1 every 10 seconds


//HUNGER SCALE ----->

let hunger = 0
let hungryness = document.getElementById('hunger')

setInterval(()=>{
    hunger = Math.min(hunger +1, 10);
    
    hungryness.innerHTML = `${hunger} /10`;
}, 1000);



//start BUtton name Section ----->

// const start = document.getElementsByClassName('start');

// console.log(start)
// START BUTTON Pop up window input

//use bootstrap modal
//to get value 