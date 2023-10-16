const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
const winnerScores = [0, 0];

// Add event listeners to buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', playGame);
}

function playGame(e) {
  
    let playerSelection = e.target.innerText;
    let computerSelection = Math.random();


    if (computerSelection < 0.34) {
        computerSelection = 'ROCK';
    } else if (computerSelection <= 0.67) {
        computerSelection = 'PAPER';
    } else {
        computerSelection = 'SCISSORS';
    }

    
    let result = checkWinner(playerSelection, computerSelection);

  
    if (result === 'Player') {
        result += ' wins!';
    
        winnerScores[0]++;
    }

    if (result === 'Computer') {
        result += ' wins!';
        winnerScores[1]++;
    }

    if (result === 'Draw') {
        result += ". It's a tie!";
    }

    score.innerHTML = 'Player: [ ' + winnerScores[0] + ' ] Computer: [ ' + winnerScores[1] + ' ]';

    messenger('Player: <strong>' + playerSelection + '</strong> Computer: <strong>' + computerSelection + '</strong><br>' + result);
}

function messenger(selectionMessage) {
    message.innerHTML = selectionMessage;
}

function checkWinner(player, computer) {
    player = player.toUpperCase();
    computer = computer.toUpperCase();

    if (player === computer) {
        return 'Draw';
    }

    if (player === 'ROCK') {
        if (computer === 'PAPER') {
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'PAPER') {
        if (computer === 'SCISSORS') {
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'SCISSORS') {
        if (computer === 'ROCK') {
            return 'Computer';
        } else {
            return 'Player';
        }
    }
}
