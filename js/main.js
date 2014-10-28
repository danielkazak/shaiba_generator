
// Vars
 var dishes = [];
 var nations = [];
 var adjs = [];
 var finalSentence;


// Functions
function Randomize(length){
  return Math.floor(Math.random() * length);
}


function GenerateSentence(){
  dishes = APP.connector.getData('dishes');
  nations = APP.connector.getData('nations');
  adjs = APP.connector.getData('adj');
  finSentence = dishes[Randomize(dishes.length)] + " " + nations[Randomize(nations.length)] + 
  " " + adjs[Randomize(adjs.length)];
  document.getElementById("#genText").innerHTML = finSentence;

}
