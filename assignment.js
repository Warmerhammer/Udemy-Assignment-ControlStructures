 // produces random number between 0 (including) and 1 (excluding)
const randomBtn = document.getElementById('random-number-generator');
const randomArrayBtn = document.getElementById('random-array-generator');
const anotherRandomBtn = document.getElementById('another-random-number');
const randomArray = [];

let numberContainer;

function randomNumberHandler(){
    for (i=0; i < .7; i = numberContainer){
        const randomNumber = Math.random();
        numberContainer = randomNumber;
        console.log(`Here is ${randomNumber}`);
    }
    alert(`Your random number above .7 is ${numberContainer}`);
}

function randomArrayHandler(){
    for (i=0; i<=5; i++){
        const randomNumber = Math.random();
        const foobar = {
            One: parseInt(10 * randomNumber),
            Two: parseInt(20 * randomNumber),
            Three: parseInt(30 * randomNumber),
            Four: parseInt(40 * randomNumber),
            Five: parseInt(50 * randomNumber)
        }
        randomArray.push(foobar);
    }
        console.log(randomArray);

    let j=0;    
    for (const logEntry of randomArray){
        console.log(`#${j}`);
        for (const key in logEntry){
            console.log(`${key} => ${logEntry[key]}`);
        }
        j++;
    }
    
    let k=5;
    while(k>2){
        console.log(`#${k}`);
        console.log(randomArray[k]);
        k--;
    }
}

function anotherRandomBtnHandler(){
    const randomNumber = Math.random();
    const anotherRandomNumber = Math.random();
    if(anotherRandomNumber <= .2 || randomNumber <= .2) {
        alert('One of your random numbers are under .2');
    } else if (anotherRandomNumber>.7 && randomNumber > .7){
        alert('Both random numbers are greater than .7')
    }
    console.log(
        `anotherRandomNumber variable contains ${anotherRandomNumber} 
        \n randomNumber variable contains ${randomNumber}`
      );
}

anotherRandomBtn.addEventListener('click', anotherRandomBtnHandler);
randomBtn.addEventListener('click', randomNumberHandler);
randomArrayBtn.addEventListener('click', randomArrayHandler);