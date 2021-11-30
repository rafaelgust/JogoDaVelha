let board = ['','','','','','','','',''],
playerTime = 0,
symbols = ['o', 'x'];

function move(position){
    board[position] = symbols[playerTime];

    playerTime === 0 ? playerTime = 1 : playerTime = 0;
}