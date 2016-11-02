$(document).ready(function(){
//----------------------------- GLOBAL VARIABLES -----------------------------//

    var randomColor = null;
    var blocksArray = [];

//---------------------------------- LOGIC -----------------------------------//

    // when generate button is pressed, generate a div with a random hex color,
    // and append to the dom
    $('#generate').on('click', function(){
        $('#blockContainer').append(randomColorDivGen());
    });

    // when start button is pressed, buttons are removed and the randomly
    // selected color's hex value is displayed
    $('#start').on('click', function(){
        $('button').remove();
        randomColor = blocksArray[randomArrayIndex(blocksArray.length)];
        $('#colorToFind').html('<h2>Click the hex color #' + randomColor +
            '</h2>');
    });

    // compares random color to the color selected by the user
    $('#blockContainer').on('click', '.colorBlock', function(){
        if (compareRandClicked(randomColor, this.id)) {
            $(this).append('<p class="result">Correct</p>').hide().fadeIn();
        } else {
            $(this).append('<p class="result">Incorrect</p>').hide().fadeIn();
        }
    });

//-------------------------------- FUNCTIONS ---------------------------------//

    // random number generator template (currently unused)
    function randomNumber(min, max){
        return Math.floor(Math.random() * (1 + max - min) + min);
    }

    // random number generator with 0 as minimum
    function randomArrayIndex(arrayLength){
        return Math.floor(Math.random() * (1 + arrayLength - 0) + 0);
    }

    function randomColorDivGen(){
        var randomHex = "";
        while (randomHex.length != 6){
            randomHex = Math.floor(Math.random()*16777215).toString(16);
        }

        var coloredDiv = '<div class="colorBlock" id="' + randomHex +
            '" style=\"background: #' + randomHex + '\"></div>\n';

        blocksArray.push(randomHex);
        return coloredDiv;
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
            $('#result').hide().html('<h2>Correct! :)</h2>').fadeIn();
        } else {
            $('#result').hide().html('<h2>Incorrect! :(</h2>').fadeIn();
        }
    }

    // adds a new block with a random color to the DOM
    function addRandomBlock (timesToRun) {
        for (var i = 0; i < timesToRun; i++){
            blocksArray.push(randomColorDivGen());
        }
    }

});
