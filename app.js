let userscore = 0;
let compscore = 0;

const options = document.querySelectorAll(".option");
const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");


const gencomputer = () =>{
    let ans = ["rock", "paper" , "scissors"]
    const randindx = Math.floor(Math.random() *3);
    return ans[randindx];

};

const drawgame= () =>{
    msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userscore++;
      userscorePara.innerText = userscore;
      msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
    } else {
      compscore++;
      compscorePara.innerText = compscore;
      msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "red";
    }
  };
const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = gencomputer();
  
    if (userChoice === compChoice) {
      //Draw Game
      drawgame();

    } else {
      let userWin = true;
      if (userChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
      } else {
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
    }
  };


options.forEach((option) => {
   option.addEventListener("click", ()=>{
    const userChoice = option.getAttribute("id");
    playGame(userChoice)
   });
   
});