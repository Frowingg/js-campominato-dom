// mi inizializzo le variabili
const gameGrid = document.getElementById('game_grid');
const playBnt = document.getElementById('play_btn');
const message = document.getElementById('game_result');
let gameDifficulty;
let bombs = [];
let game = true;  
let userNumber;
let attempt = 0;

//al click sul tasto play attivo la funzione paly
playBnt.addEventListener('click', play);

//funzione PLAY
function play() {
    message.innerHTML = '';
    // in base alla difficoltà scelta dall'utente creo l'array con i numeri
    switch(parseInt(document.getElementById('game_difficulty').value)) {
        case 1:
            maxRange = 100;
            // squareDim = 'easy'
            bombs = prodBombs(1, maxRange);
            numInGrid(maxRange)
            limit = maxRange - bombs.lenght;
            console.log(bombs)
            break;
        case 2:
            maxRange = 81;
            // squareDim = 'medium'
            bombs = prodBombs(1, maxRange);
            numInGrid(maxRange)
            limit = maxRange - bombs.lenght;
            console.log(bombs)
            break;
        case 3:
            maxRange = 49;
            // squareDim = 'hard'
            bombs = prodBombs(1, maxRange);
            numInGrid(maxRange)
            limit = maxRange - bombs.lenght;
            // console.log(bombs)
            break;   
    }
    userNumbers = document.querySelectorAll('.square');
    
    for(let i = 0; i < userNumbers.length; i++) {
        userNumbers[i].addEventListener('click', numberCheck);
    }

}
function completeGrid() {
    userNumbers = document.querySelectorAll('.square');
    for(let i = 0; i < userNumbers.length; i++) {
        if (bombs.includes(parseInt(userNumbers[i].innerHTML))) {
            userNumbers[i].classList.add('red_bg');
            userNumbers[i].classList.add('non_pointer');
        } else {
            userNumbers[i].classList.add('green_bg');
            userNumbers[i].classList.add('non_pointer');
        }
    }
}


function numberCheck() {
    // while sul quale si basa il gioco che mi permette di controllare che le regole siano rispettate
    num = parseInt(this.innerHTML);
    while (game === true) {
        if (!bombs.includes(num)) {
            attempt++;
            message.innerHTML = `c'hai preso!`;
            this.classList.add('green_bg');
            game = true;
        } else {
            message.innerHTML = `peccato, hai perso! Hai azzeccato con ${attempt} tentativi`;
            this.classList.add('red_bg');            
            completeGrid();
            setTimeout(cancel, 5000)
            game = false;
        }
    }
}


function cancel() {
    gameGrid.innerHTML = '';
    message.innerHTML = 'prova ancora!'
    userNumbers = document.querySelectorAll('.square');
    for(let i = 0; i < userNumbers.length; i++) {
        userNumbers[i].classList.remove('non_pointer');
        if (bombs.includes(parseInt(userNumbers[i].innerHTML))) {
            userNumbers[i].classList.remove('red_bg');
        } else {
            userNumbers[i].classList.remove('green_bg');
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