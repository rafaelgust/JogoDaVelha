
document.addEventListener('DOMContentLoaded', ()=> {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', click);
    });
    
    function click(e){
        e.style.background = red;
    }

});