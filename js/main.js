
// Functions

function GenerateSentence(){
    APP.operations.generateSentence();
    document.getElementById("#generate").focus();

}


$( document ).ready(function() {
    document.getElementById("#generate").focus();
    APP.listener.createKeyListener("#generate");
    console.log(document.activeElement);
});