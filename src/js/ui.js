/**
 * 
 *  
 */

import '../css/main.scss';
import RockPaperScissors from './main'

const game = new RockPaperScissors();

const buttons = document.getElementsByClassName("option");
for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      
        const result = game.playGame(this.id)
        console.log(this.id);
        document.getElementById('result').innerHTML = result;
        generateResult(result);
    }, false);

}

export const generateResult = function(result) {
    // document.getElementById('computerChoice').className = `fas fa-hand-${result.playerTwo.name} fa-7x fa-border`
    document.getElementById('computerChoice').innerHTML = result.playerTwo.name;
    let resultMessage;
    if(result.playerOne.beats.includes(result.playerTwo.name )) {
        resultMessage = 'Player one wins!'
    } else if(result.playerTwo.beats.includes(result.playerOne.name )) {
        resultMessage = 'Player two wins!'
    } else {
        resultMessage = 'Tie Game!'
    }

    //The results are in!
    document.getElementById('result').innerHTML = resultMessage
}
