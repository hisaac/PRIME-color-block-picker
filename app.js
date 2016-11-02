$(document).ready(function(){
//-------------------------------- VARIABLES ---------------------------------//



//---------------------------------- LOGIC -----------------------------------//

    $('.colors').append(
        '<div id="red"></div>' +
        '<div id="green"></div>' +
        '<div id="yellow"></div>' +
        '<div id="blue"></div>'
    );

//-------------------------------- FUNCTIONS ---------------------------------//

    // random number generator
    function randomNumber(min, max){
        return Math.floor(Math.random() * (1 + max - min) + min);
    }

});
