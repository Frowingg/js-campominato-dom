// mi inizializzo le variabili
const gameGrid = document.getElementById('game_grid');
const playBnt = document.getElementById('play_btn');
const message = document.getElementById('game_result');
let gameDifficulty;
let bombs = [];
let game = true;  
let userNumber;
console.log(bombs)
console.log(gameDifficulty)


//al click sul tasto play attivo la funzione paly
playBnt.addEventListener('click', play);

//funzione PLAY
function play() {
    // in base alla difficoltà scelta dall'utente creo l'array con i numeri
    switch(parseInt(document.getElementById('game_difficulty').value)) {
        case 1:
            maxRange = 100;
            // squareDim = 'easy'
            bombs += prodBombs(1, maxRange);
            numInGrid(maxRange)
            break;
        case 2:
            maxRange = 81;
            // squareDim = 'medium'
            bombs += prodBombs(1, maxRange);
            numInGrid(maxRange)
            break;
        case 3:
            maxRange = 49;
            // squareDim = 'hard'
            bombs += prodBombs(1, maxRange);
            numInGrid(maxRange)
            break;   
    }
    userNumbers = document.querySelectorAll('.square');
    
    for(let i = 0; i < userNumbers.length; i++) {
        userNumber = userNumbers[i];
        number = userNumber.innerHtml
        userNumber.addEventListener('click', numberCheck(number));

    }

}

function numberCheck(num) {
    // while sul quale si basa il gioco che mi permette di controllare che le regole siano rispettate
    while (game) {
        let j = 0;
        if (!(bombs.includes(num))) {
            message = `peccato, hai perso! Hai azzeccato ${j} tentativi`;
            game = false;
        } else {
            message = `c'hai preso!`;
            j++;
        }

        if (j >= maxRange - bombs.lenght) {
            game = false;
            message = `hai vinto con ${j} tentativi`;
        }
    }
}

// funzione che richiamo nello switch per produrre l'array
function prodBombs(min, max) {
    let tempArray = [];
    for(i=1; i<=16; i++) {
        num = getRndInteger(min, max);
        if (tempArray.includes(num)) {
            i--;
        } else {
            tempArray.push(num);
        }        
    }
    return tempArray
}

//metto i numeri nella griglia
function numInGrid(maxRange) {
    for (i=1; i<=maxRange; i++) {
        // gameGrid.innerHTML += `<div class='square ${squareDim}'>${i}</div>`;
        gameGrid.innerHTML += `<div class='square'>${i}</div>`;
    }
}

// funzione che uso per creare in maniera casuale i numeri da mettere nell'array
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}