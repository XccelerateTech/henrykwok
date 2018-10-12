$(document).ready(function(){

    var player = 1;

    $('.square').on('click', function(e){
        let squareSelected = $(this);

        if (squareSelected.hasClass('far fa-circle') || squareSelected.hasClass('fas fa-times')){
            alert ("The section has been selected.");
        } else {
            if (player === 1) {
                squareSelected.addClass('far fa-circle');
                if (ifWon('far fa-circle')) {
                    alert ("Player 1 has won.");
                } else {
                    player = 2;
                }
                
            } else {
            squareSelected.addClass('fas fa-times');
            if (ifWon('fas fa-times')) {
                alert ("Player 2 has won.");
            }
            player = 1;
            }; 
        }

    });

    function ifWon (symbol) {
        if($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol)){
            return true;
        } else if ($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)) {
            return true;
        } else if ($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
            return true;
        } else if ($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
            return true;
        } else if ($('.sq2').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq6').hasClass(symbol)) {
            return true;
        } else if ($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)){
            return true;
        } else if ($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)){
            return true;
        } else if ($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq7').hasClass(symbol)){
            return true;
        } else {
            return false;
        }
    }

});