
let squares = document.querySelectorAll('.square');

document.addEventListener('DOMContentLoaded', ()=> {
    squares.forEach((square) => {
        square.addEventListener('click', click);
    });
});

function click(e){
    let square = e.target;
    let position = square.id;

    move(position);
    update();
}

function update(){ 
    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if(symbol !== ''){square.innerHTML = `<div class="${symbol}"></div>`;}
    });
}