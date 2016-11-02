$(document).ready(function(){
//----------------------------- GLOBAL VARIABLES -----------------------------//

    var randomColor = null;

//---------------------------------- LOGIC -----------------------------------//

    append color divs to the DOM
    $('#blockContainer').append(
        '<div class="colorBlock" id="red"></div>\n' +
        '<div class="colorBlock" id="green"></div>\n' +
        '<div class="colorBlock" id="yellow"></div>\n' +
        '<div class="colorBlock" id="blue"></div>\n'
    );

    // calls multiple functions
    $('.colorBlock').click(function(){
        appendResult(compareRandClicked(numberToColor(randomNumber(1, 4)), this));
    });

//-------------------------------- FUNCTIONS ---------------------------------//

    // random number generator
    function randomNumber(min, max){
        return Math.floor(Math.random() * (1 + max - min) + min);
    }

    // converts number to specific div element
    function numberToColor(number){
        switch (number) {
            case 1:
                return red;
                break;
            case 2:
                return green;
                break;
            case 3:
                return yellow;
                break;
            case 4:
                return blue;
                break;
        }
    }

    // compares randomly selected color to clicked color
    function compareRandClicked (random, clicked) {
        if (random === clicked){
            return true;
        } else {
            return false;
        }
    }

    // appends correct or incorrect to the DOM
    function appendResult (boolean) {
        if (boolean) {
            $('body').append('<h2>Correct! :)</h2>');
        } else {
            $('body').append('<h2>Incorrect! :(</h2>');
        }
    }

});
