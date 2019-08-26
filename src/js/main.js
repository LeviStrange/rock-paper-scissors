import '../css/main.scss';

export default class RockPaperScissors {
    constructor(){
        this.choices = [
            {
                name: 'rock',
                beats: ['scissors', 'lizard']
            },
            {
                name: 'paper',
                beats: ['rock', 'spock']
            },
            {
                name: 'scissors',
                beats: ['paper', 'lizard']    
            },
            {
                name: 'spock',
                beats: ['scissors', 'rock']
                
            },
            {
                name: 'lizard',
                beats: ['spock', 'paper']
            }
            
          ]
    }
  
    getUserChoice(userInput) {
      const userOption = this.choices.find(choice => choice.name === userInput)
      console.log('valud', userOption);
      if (userOption) {
          return userOption;
      } else {
          return false;
      }
    }
  
    getComputerChoice() {
      const computerChoice = Math.round(Math.random() * 3);
      return this.choices[computerChoice]
    }
  
    playGame(name) {
          var playerOne;
          if(name === 'random') {
              playerOne = this.getComputerChoice(name)
          } else {
              playerOne = this.getUserChoice(name)
          }
          const playerTwo = this.getComputerChoice();
  
          return {
              playerOne: playerOne,
              playerTwo: playerTwo
          }
      }
  }