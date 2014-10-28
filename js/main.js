
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
  dishes = APP_DB.connector.getData('dishes');
  nations = APP_DB.connector.getData('nations');
  adjs = APP_DB.connector.getData('adj');
  finSentence = dishes[Randomize(dishes.length)] + " " + nations[Randomize(nations.length)] + 
  " " + adjs[Randomize(adjs.length)];
  document.getElementById("#genText").innerHTML = finSentence;

}
