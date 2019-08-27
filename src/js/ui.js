/**
 * This is the file for all the UI modification for RPSLS.
 */

import RockPaperScissors from './main'

const rockPaperScissors = new RockPaperScissors();

let userScore = document.getElementById('userScore').textContent;
let userIntScore = parseInt(userScore, 10);
let compScore = document.getElementById('computerScore').textContent;
let compIntScore = parseInt(compScore, 10);
const buttons = document.getElementsByClassName("option");

for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        const result = rockPaperScissors.playGame(this.id)
        document.getElementById('result').innerHTML = result;
        generateResult(result);
        resetCounter(); 
    }, false);
}

export const generateResult = function(result) {
    document.getElementById('computerChoice').innerHTML = 'Your opponent picked ' + result.playerTwo.name;    
    document.getElementById('usersChoice').innerHTML = 'You picked ' + result.playerOne.name;
    
    let resultMessage;
    if (result.playerOne.beats.includes(result.playerTwo.name )) {
        resultMessage = 'You Win!';
        userIntScore = userIntScore + 1;
        document.getElementById('userScore').textContent = userIntScore;
    } else if(result.playerTwo.beats.includes(result.playerOne.name )) {
        resultMessage = 'You Lose!';
        compIntScore = compIntScore + 1;
        document.getElementById('computerScore').textContent = compIntScore;
    }else {
        resultMessage = 'Tie Game!';
    }
    document.getElementById('result').innerHTML = resultMessage;   
}

export function resetCounter() {
    let reset = document.getElementById('resetCounter');
    reset.addEventListener('click', function(){
        document.getElementById('computerScore').textContent = 0;
        userIntScore = 0;
        document.getElementById('userScore').textContent = 0;
        compIntScore = 0;
    });
}