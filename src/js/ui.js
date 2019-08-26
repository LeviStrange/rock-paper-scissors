/**
 * This is the file for all the UI modification for RPSLS.
 *  
 */

import RockPaperScissors from './main'

const rockPaperScissors = new RockPaperScissors();

const buttons = document.getElementsByClassName("option");
for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        const result = rockPaperScissors.playGame(this.id)
        document.getElementById('result').innerHTML = result;
        generateResult(result); 

    }, false);
}

export const generateResult = function(result) {
    document.getElementById('computerChoice').innerHTML = 'The computer picked ' + result.playerTwo.name;
    
    let resultMessage;
    
    // let computerScoreCount = 0;

    if(result.playerOne.beats.includes(result.playerTwo.name )) {
        let userScoreCount = 0;
        let userScore = document.getElementById('userScore').innerHTML;
        userScoreCount += 1;
        console.log("user", userScoreCount)
        userScore = userScoreCount;

        resultMessage = 'You Win!';
        
    }else if(result.playerTwo.beats.includes(result.playerOne.name )) {
        resultMessage = 'You Lose!';
        // let computerScore = document.getElementById('computerScore').innerHTML;
        // computerScoreCount;
        // console.log(computerScore);

    }else {
        resultMessage = 'Tie Game!';
    }

    document.getElementById('result').innerHTML = resultMessage;
    
    
   
}
