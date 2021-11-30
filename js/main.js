
let squares = document.querySelectorAll('.square');
let again = document.querySelector('.btn button');
let result = document.querySelector('.result');

again.addEventListener('click', restart);

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

function clearDiv(){
    result.innerHTML = '';
    squares.forEach((square) => {
        square.innerHTML = '';
    });       
}