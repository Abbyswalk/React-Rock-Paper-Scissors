class RockPaperScissors {
    getComputerChoice() {
      const choices = ["rock", "paper", "scissors"];
      return choices[Math.floor(Math.random() * choices.length)];
    }
  
    determineWinner(userChoice, cpuChoice) {
      if (userChoice === cpuChoice) return "draw";
      if (
        (userChoice === "rock" && cpuChoice === "scissors") ||
        (userChoice === "paper" && cpuChoice === "rock") ||
        (userChoice === "scissors" && cpuChoice === "paper")
      ) {
        return "win";
      }
      return "lose";
    }
  }
  
  export default RockPaperScissors;
  