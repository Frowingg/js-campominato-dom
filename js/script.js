// mi inizializzo le variabili
const gameGrid = document.getElementById('game_grid');
const playBnt = document.getElementById('play_btn');
let gameDifficulty;
let bombs = [];
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
    console.log(bombs)
    // while sul quale si basa il gioco che mi permette di controllare che le regole siano rispettate
    userNumber = document.querySelectorAll('square')
    console.log(userNumber)
    // while (game) {
    //     userNumber = document.querySelectorAll('square')
    //     console.log(userNumber)
    //     if (bombs.includes(userNumber)) {
    //         alert('sei na pippa!')
    //         alert(`tentativi giusti ${j}`)
    //         game = false;
    //     } else {
    //         alert("c'hai preso!")
    //         j++
    //     }
    //     if (j >= maxRange - bombs.lenght) {
    //         game = false
    //         alert(`hai vinto con ${j}`)
    //     }
    // }

}

 
let game = true;
let userNumber;
let j = 0;

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

// console.log('bombs',bombs)

//metto i numeri nella griglia
function numInGrid(maxRange) {
    for (i=1; i<=maxRange; i++) {
        // gameGrid.innerHTML += `<div class='square ${squareDim}'>${i}</div>`;
        gameGrid.innerHTML += `<div class='square'><p class='number_in_p>${i}</p></div>`;
    }
}


// funzione che uso per creare in maniera casuale i numeri da mettere nell'array
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
