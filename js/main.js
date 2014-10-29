
// Functions
function Randomize(length){
  return Math.floor(Math.random() * length);
}


function GenerateSentence(){
  var finSentence = dishesTable[Randomize(dishesTable.length)] + " " + nationsTable[Randomize(nationsTable.length)] +
  " " + adjsTable[Randomize(adjsTable.length)];
  document.getElementById("#genText").innerHTML = finSentence;
}
