
Parse.initialize("SyCWUj76oNwCrRpfvO2B5gdkm9uKvMkHNyEjZwCJ", "W4RDU3xDaHX9VgpOv2oJzFkCyItDzA5MMGk5v69l");
getFROMParse("dishes");
getFROMParse("nations");
getFROMParse("adj");



// Vars
 var dishes = [];
 var nations = [];
 var adjs = [];















// Functions

function generateShaiba(){
  var r = Randomize(dishes.length);
  var finSentence = dishes[r] + " " + nations[Randomize(nations.length)] + 
  " " + adjs[Randomize(adjs.length)];
  document.getElementById("#genText").innerHTML = finSentence;
}



function getFROMParse(coll) {


$.ajax({
  type: 'GET',
  headers: {'X-Parse-Application-Id':'SyCWUj76oNwCrRpfvO2B5gdkm9uKvMkHNyEjZwCJ',
  'X-Parse-REST-API-Key':'ykKXzomRdgxjdWPjPnhqcLFD7OmxAZbavzYOpIwr'},
  url: "https://api.parse.com/1/classes/" + coll,
  contentType: "application/json",
  dataType: 'json',
  success: function( data, status ){
    var obj = $.parseJSON(JSON.stringify(data));
    if (coll === "dishes"){
       for (var v in obj.results ){    
          dishes.push(obj.results[v].dishName);

       }
       console.log(dishes);
    }else if (coll === "nations"){
        for (var v in obj.results ){    
          nations.push(obj.results[v].natName);
       }
       console.log(nations);
    }else{
        for (var v in obj.results ){    
          adjs.push(obj.results[v].adjName);
       }
       console.log(adjs);
      }
     
       

       
      
    },
    error: function(xhr, textStatus, err) { //odstampaj textStatus, err jbt
        alert('ne radi');
        alert(textStatus);
        alert(err);
        alert("readyState: "+xhr.readyState+"\n xhrStatus: "+xhr.status);
        alert("responseText: "+xhr.responseText);
    }
  
});
if (coll === "dishes"){  return dishes; }
 else if (coll === "nations"){return nations;}
 else { return adjs; }
}



function Randomize(length){
	return Math.floor(Math.random() * length);
}


