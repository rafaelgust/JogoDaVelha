let board = ['','','','','','','','',''],
playerTime = 0,
symbols = ['o', 'x'];
endGame = false;

function restart(){
    board = ['','','','','','','','',''],
    playerTime = 0,
    endGame = false;
    clearDiv();
}

function move(position){
    if(endGame){return;}
    if(board[position] === ''){
        board[position] = symbols[playerTime];
        endGame = isWin();
        if(!endGame){
            playerTime === 0 ? playerTime = 1 : playerTime = 0;
        }else{
            let btn = document.querySelector('.btn button');
            let result = document.querySelector('.result');
            let icon;
            playerTime === 0 ? icon = '🐶' : icon = '🐱';

            btn.innerHTML = 'Jogar Novamente';
            result.innerHTML = `<div>${icon} Venceu !!!</div>`;
        }
    }
}

function isWin(){
    let winStates = [ //possibilidades de vitoria
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for(let i = 0; i < winStates.length; i++){
        let seq = winStates[i];

        let p1 = seq[0];
        let p2 = seq[1];
        let p3 = seq[2];

        if(board[p1] === board[p2] && board[p1] === board[p3] && board[p1] !== ''){
            return true;
        }

    }

}