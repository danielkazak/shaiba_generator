
// Functions
function Randomize(length){
  return Math.floor(Math.random() * length);
}


function GenerateSentence(){
  var finSentence = dishesTable[Randomize(dishesTable.length)] + " " + nationsTable[Randomize(nationsTable.length)] +
  " " + adjTable[Randomize(adjTable.length)];
  document.getElementById("#genText").innerHTML = finSentence;
}
