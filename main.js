const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');


const scoreboard = {
    player: 0,
    computer: 0
};



// GAME
function play(e){
    restart.style.display ='inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
}

// computer choice
function getComputerChoice(){
    const rand = Math.random();
    if (rand < 0.34){
        return 'rock';

    } 

    else if (rand <= 0.67){
        return 'paper';
    } 

    else{
        return 'scissors';
    }
}


//game winner 
function getWinner(p, c){

    if (p == c){
        return 'draw';
    }
    else if (p == 'rock'){
        if (c == 'paper'){
            return 'computer';
        }
        else {
            return 'player';
        }
    }


    else if (p == 'paper'){
        if (c == 'scissors'){
            return 'computer';
        }
        else{
            return 'player';
        }
    }

    else if (p == 'scissors'){
        if (c == 'rock'){
            return 'computer';
        }
        else{
            return 'player';
        }
    }
}


function showWinner(winner, computerChoice){
    if(winner === 'player'){
        let div= document.querySelector("#container-player");
        let playerScore = `${scoreboard.player}`;
        playerScore++;
        finalScore = document.createElement("li");
        finalScore.innerHTML = playerScore;
       
        scoreboard.player++;
        // increment player score
        //show modal result
        result.innerHTML = `
            <h1 class="text-win">You Win</h1>
            <i class="fa-regular fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;

        div.appendChild(finalScore);

    }

    else if (winner === 'computer'){
        let div= document.querySelector("#container-computer");
        let playerScore = `${scoreboard.computer}`;
        playerScore++;
        finalScore = document.createElement("li");
        finalScore.innerHTML = playerScore;

        // increment computer score
        scoreboard.computer++;

        //show modal result
        result.innerHTML = `
            <h1 class="text-lose">You Lose</h1>
            <i class="fa-regular fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;

        div.appendChild(finalScore);
    }

    else {
        result.innerHTML = `
        <h1>Its a Draw</h1>
        <i class="fa-regular fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
    `;
    }

    // show score
    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;

     modal.style.display = 'block';
}



//restart game
function restartGame(){
    let player =document.querySelector("#container-player");
    let computer =document.querySelector("#container-computer");
    player.innerHTML   = '';
    computer.innerHTML = '';
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
        <p>Player: 0</p>
        <p>Computer: 0</p>
    `;
  
}

// clear modal
function clearModal(e){
    if (e.target == modal){
        modal.style.display ='none';
    }
}

// event
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);





