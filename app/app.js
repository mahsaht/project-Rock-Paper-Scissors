// get all the image tags
const imageTags = document.querySelectorAll("img");         

// variables for game stats
let computerWin = 0;                                         
let userWin = 0;                                             
//console.log(imageTags);

//find out the img element on which a click is performed
for (let i = 0; i < imageTags.length; i++) {                                 
  imageTags[i].onclick = function (e) {                                         
        let user = e.target.id;  //user option                                  
        let computer = GetComputerChoice();  // computer option                 
                                                                                  
        DecideWinner(user, computer);                                             
  }
}

// computer choice 
function GetComputerChoice() {                                          
  const choices = ['rock', 'paper', 'scissor'];                         
  const randomChoice = Math.floor(Math.random()*3); //0 1 2             
  return choices[randomChoice]; 
}

// decide winner function 
// Rock wins against scissors.
// Scissors win against paper.
// Paper wins against rock.
function DecideWinner(userChoice, ComputerChoice) {
  const result = document.getElementById('result');

  if(userChoice === ComputerChoice) {
    result.innerHTML = 'Both selected ' + userChoice + '.It is a tia!';
  }else if(userChoice === 'rock'){
    if(ComputerChoice === 'scissor'){
      result.innerHTML = 'Rock smashes the scissor. You win';
      userWin++;
    }else{
      result.innerHTML = 'Paper covers the rock. You lose';
      computerWin++;
    }
  }else if(userChoice === 'paper'){
    if(ComputerChoice === 'rock') {
      result.innerHTML = 'paper covers the rock. You win';
      userWin++;
    }else {
      result.innerHTML = 'Scissor cuts paper. You lose';
      computerWin++;
    }
  }else if(userChoice === 'scissor') {
    if(ComputerChoice === 'paper'){
      result.innerHTML = 'Scissor cuts the paper. You win';
      userWin++;
    }else{
      result.innerHTML = 'Rock smashes the scissor. You lose';
      computerWin++
    }
  }
  document.getElementById('user-stats').innerHTML = userWin.toString();
  document.getElementById('computer-stats').innerHTML = computerWin.toString();
}

// riset application 
const riset = document.getElementById('riset');
riset.onclick = function() {
  window.location.reload();
}

