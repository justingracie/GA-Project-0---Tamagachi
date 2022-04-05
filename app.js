//  --->GLOBAL VARIABLES<--- //
let age = 0
const ageValue= document.getElementById('age');

let hunger = 0
const hungryness = document.getElementById('hunger')

let bored = 0
const boredom = document.getElementById('bored')

let sleep = 0;
const sleepiness = document.getElementById('sleepy');


// AGE Counter------>

setInterval(()=>{
    age++
    ageValue.innerHTML = age;
}, 10000)
// age increasing by 1 every 10 seconds


//HUNGER Counter ----->

setInterval(()=>{
    hunger = Math.min(hunger +1, 10);
    hungryness.innerHTML = `${hunger} /10`;
}, 1000);
//hunger increases by 1 every second


//Bored Counter ----->

setInterval(()=>{
    bored = Math.min(bored +1, 10);
    boredom.innerHTML = `${bored} /10`
}, 1000)
//boredom increase by 1 every second


//Sleepiness Counter ----->

setInterval(() =>{
    sleep = Math.min(sleep +=1, 10);
    sleepiness.innerHTML = `${sleep} /10`
}, 1000)
//sleepiness increase by 1 every second


//FEED button -----> this button should decrement the hungriness by 2 on each click
//PLAY BUTTON -----> this button should decrement the boredom by 5
//LIGHTS OUT -----> this button should  decrement sleepiness by 3




//START button ----->

// start button should do a few things: 

// 1. print the name entered in the  input box into a DIV 
// 2. hide the name input box
// 3. start the counters for the mame hunger, sleep, boredom, and age 

const start = document.querySelector('.start');
const nameHere = document.querySelector('.nameHere');
const nameField = document.querySelector('.name');

console.log(nameHere);



start.addEventListener('click', printName);

function printName (){
    nameField.innerHTML = nameHere.value;
    console.log('TESTING')
}

// printName();

// function testing() {
//     console.log('anything');
// }

// testing();


