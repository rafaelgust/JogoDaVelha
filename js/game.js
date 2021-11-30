let board = ['','','','','','','','',''],
playerTime = 0,
symbols = ['o', 'x'];
endGame = false;

function move(position){
    if(endGame){
        return;
    }
    if(board[position] === ''){
        board[position] = symbols[playerTime];
        endGame = isWin();
        playerTime === 0 ? playerTime = 1 : playerTime = 0;
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

        if(board[p1] === board[p2] && board[p1] === board[p3]){
            return true;
        }

    }

}