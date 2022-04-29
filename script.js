function createParagraph() {
    var wordOne = document.getElementById('word1').value;
    var wordTwo = document.getElementById('word2').value;
    var wordThree = document.getElementById('word3').value;
    var wordFour = document.getElementById('word4').value;
    var wordFive = document.getElementById('word5').value;
    var wordSix = document.getElementById('word6').value;
    var wordSeven = document.getElementById('word7').value;
    var wordEigth = document.getElementById('word8').value;
    var wordNine = document.getElementById('word9').value;
    var wordTen = document.getElementById('word10').value;
    var wordEleven = document.getElementById('word11').value;
    var wordTwelve = document.getElementById('word12').value;
    var wordThirteen = document.getElementById('word13').value;
    var wordFourteen = document.getElementById('word14').value;
    var wordFifteen = document.getElementById('word15').value;
    var wordSixteen = document.getElementById('word16').value;
    var wordSeventeen = document.getElementById('word17').value;
    var wordEighteen = document.getElementById('word18').value;

    var paragraph = "Josiah " + wordOne + " tomatoes " + wordTwo +"Hayley " + wordThree +"Louella " + wordFour + " Green beans " + wordFive + " Carter" + wordSix + " Corns " 

    document.getElementById('answer').innerHTML = paragraph;
}