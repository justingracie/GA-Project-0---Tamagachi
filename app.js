//  --->GLOBAL VARIABLES<--- //
let age = 0
const ageValue= document.getElementById('age');

let hunger = 0
const hungryness = document.getElementById('hunger')

let bored = 0
const boredom = document.getElementById('bored')

let sleep = 0;
const sleepiness = document.getElementById('sleepy');
const start = document.querySelector('.start');
const nameHere = document.querySelector('.nameHere');
const nameField = document.querySelector('.name');
const feedButton = document.querySelector('.feed');




// AGE Counter------>
function ageCounter(){

    setInterval(()=>{
        age++
        ageValue.innerHTML = age;
    }, 10000)

}

// age increasing by 1 every 10 seconds


//HUNGER Counter ----->
function hungerCounter(){
    
    setInterval(()=>{
        hunger = Math.min(hunger +1, 10);
        hungryness.innerHTML = `${hunger} /10`;
    }, 4000);

}
//hunger increases by 1 every second


//Bored Counter ----->
function boredCounter(){

    setInterval(()=>{
        bored = Math.min(bored +1, 10);
        boredom.innerHTML = `${bored} /10`
    }, 1000)

}


//boredom increase by 1 every second


//Sleepiness Counter ----->
function sleepinessCounter(){

    setInterval(() =>{
        sleep = Math.min(sleep +=1, 10);
        sleepiness.innerHTML = `${sleep} /10`
    }, 1000)


}

//sleepiness increase by 1 every second


//FEED button -----> this button should decrement the hungriness by 2 on each click


feedButton.addEventListener('click', feedPet)

function feedPet(){
    hunger -=2;
}

//PLAY BUTTON -----> this button should decrement the boredom by 5

const playButton = document.querySelector('.play');

playButton.addEventListener('click', playWithPet)

function playWithPet(){
    bored -=5;
}


//LIGHTS OUT -----> this button should  decrement sleepiness by 3




//START button ----->

// start button should do a few things: 

// 1. print the name entered in the  input box into a DIV - DONE!
// 2. hide the name input box and start button --- this is optional for now
// 3. start the counters for hunger, sleep, boredom, and age.


start.addEventListener('click', printName);

function printName (){
    nameField.innerHTML = nameHere.value;
    nameHere.value = '';
    console.log('TESTING')
}
//This event listener and function prints the name input into a box Div

start.addEventListener('click', startTimers);

function startTimers(){
    hungerCounter();
    ageCounter();
    boredCounter();
    sleepinessCounter();
}

// if I wrap all the timers in a function I can add an event 
//listener that envokes all the timer functions. 