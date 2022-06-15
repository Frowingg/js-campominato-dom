// mi inizializzo le variabili
const gameGrid = document.getElementById('game_grid');
const playBnt = document.getElementById('play_btn');
let bombs = [];
let gameDifficulty;
console.log(bombs)
console.log(gameDifficulty)


//al click sul tasto play attivo la funzione paly
playBnt.addEventListener('click', play);

//funzione PLAY
function play() {
    //controlla la difficolta scelta
    gameDifficulty = document.getElementById('game_difficulty').value;
    console.log(gameDifficulty)

    // in base alla difficoltà scelta dall'utente creo l'array con i numeri
    switch(gameDifficulty) {
        case 1:
            maxRange = 100;
            prodBombs(1, maxRange);
            break;

        case 2:
            maxRange = 81;
            prodBombs(1, maxRange);
            break;
        case 3:
            maxRange = 49;
            prodBombs(1, maxRange);
            break;
    }
}

 
let game = true;
let userNumber;
let j = 0;

// funzione che richiamo nello switch per produrre l'array
function prodBombs(min, max) {
    for(i=1; i<=16; i++) {
        num = getRndInteger(min, max);
        if (bombs.includes(num)) {
            i--;
        } else {
            bombs.push(num);
        }        
    }
    console.log(bombs)
}
// console.log('bombs',bombs)

//metto i numeri nella griglia
// for (i=1; i<=maxRange; i++) {
//     gameGrid.innerHTML += `<div class='square'>${i}</div>`;
// }

// while sul quale si basa il gioco che mi permette di controllare che le regole siano rispettate
// while (game) {
    // userNumber = parseInt(prompt('dammi un numero'));
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

// funzione che uso per creare in maniera casuale i numeri da mettere nell'array
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
