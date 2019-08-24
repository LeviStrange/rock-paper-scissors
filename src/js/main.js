export default class RockPaperScissors {
    constructor(){
        this.choices = [
            {
              name: 'paper',
              beats: 'rock'
            },
            {
              name: 'rock',
              beats: 'scissors'
            },
            {
              name: 'scissors',
              beats: 'paper'    
            }
          ]
    }
  
    getUserChoice(userInput) {
      const validOption = this.choices.find(choice => choice.name === userInput)
      console.log('valud', validOption);
      if (validOption) {
          return validOption;
      } else {
          return false;
      }
  }
  
    getComputerChoice() {
      const randomNumber = Math.floor(Math.random() * 3);
      return this.choices[randomNumber]
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