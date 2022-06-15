const gameGrid = document.getElementById('game_grid');


for (i=1; i<=100; i++) {
    gameGrid.innerHTML += `<div class='square'> ${i} </div>`;
}