const game = () => {
  let pscore = 0;
  let cscore = 0;
  function result(pchoice, cchoice) {
    if (pchoice === 0) {
      if (cchoice == 1) {
        document.getElementById("result").textContent = "YOU LOST!😐";
        cscore += 1;
        document.getElementById("computerscore").textContent = cscore;
      }
      if (cchoice == 2) {
        document.getElementById("result").textContent = "YOU WON!😁";
        pscore += 1;
        document.getElementById("playerscore").textContent = pscore;
      }
      if (pchoice == cchoice) {
        document.getElementById("result").textContent = "TIE! 🤪";
      }
    } else if (pchoice === 1) {
      if (cchoice == 2) {
        document.getElementById("result").textContent = "YOU LOST!😐";
        cscore += 1;
        document.getElementById("computerscore").textContent = cscore;
      }
      if (cchoice == 0) {
        document.getElementById("result").textContent = "YOU WON!😁";
        pscore += 1;
        document.getElementById("playerscore").textContent = pscore;
      }
      if (pchoice == cchoice) {
        document.getElementById("result").textContent = "TIE! 🤪";
      }
    } else if (pchoice == 2) {
      if (cchoice == 0) {
        document.getElementById("result").textContent = "YOU LOST!😐";
        cscore += 1;
        document.getElementById("computerscore").textContent = cscore;
      }
      if (cchoice == 1) {
        document.getElementById("result").textContent = "YOU WON!😁";
        pscore += 1;
        document.getElementById("playerscore").textContent = pscore;
      }
      if (pchoice == cchoice) {
        document.getElementById("result").textContent = "TIE! 🤪";
      }
    }
  }
  function match(pchoice) {
    let computer_choice = Math.floor(Math.random() * 3);
    const choices = ["rock ⛰️", "paper 📝", "scissors ✂️"];
    document.getElementById(
      "cpop"
    ).textContent = `The computer chose : ${choices[computer_choice]} !`;
    document.getElementById(
      "pop"
    ).textContent = `You chose : ${choices[pchoice]} !`;
    result(pchoice, computer_choice);
  }
  newFunction(match);
};
game();
function newFunction(match) {
  document.getElementById("rock").addEventListener("click", function () {
    match(0);
  });
  document.getElementById("paper").addEventListener("click", function () {
    match(1);
  });
  document.getElementById("scissors").addEventListener("click", function () {
    match(2);
  });
}
