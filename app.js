//  --->GLOBAL VARIABLES<--- //
let age = 0
const ageValue= document.getElementById('age');

let hunger = 0
const hungryness = document.getElementById('hunger')

let bored = 0
const boredom = document.getElementById('bored')


//sample counter method --->
// set one get age count that increments: then displays Age on the screen.


// AGE Counter------>



setInterval(()=>{
    age++
    ageValue.innerHTML = age;
}, 10000)

// age increasing by 1 every 10 seconds


//HUNGER Counter ----->


setInterval(()=>{
    hunger = Math.min(hunger +1, 10)
    hungryness.innerHTML = `${hunger} /10`;
}, 1000);


//Bored Counter ----->


setInterval(()=>{
    bored = Math.min(bored +1, 10)
    boredom.innerHTML = `${bored} /10`
}, 1000)



//start BUtton name Section ----->

// const start = document.getElementsByClassName('start');

// console.log(start)
// START BUTTON Pop up window input

//use bootstrap modal
//to get value 