/**
 * 
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
    document.getElementById('computerChoice').innerHTML = result.playerTwo.name;
    let resultMessage;
    if(result.playerOne.beats.includes(result.playerTwo.name )) {
        resultMessage = 'Player one wins!'
    } else if(result.playerTwo.beats.includes(result.playerOne.name )) {
        resultMessage = 'Player two wins!'
    } else {
        resultMessage = 'Tie Game!'
    }
    document.getElementById('result').innerHTML = resultMessage
}
