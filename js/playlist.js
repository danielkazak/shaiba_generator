//Parse.initialize("SyCWUj76oNwCrRpfvO2B5gdkm9uKvMkHNyEjZwCJ", "W4RDU3xDaHX9VgpOv2oJzFkCyItDzA5MMGk5v69l");

getFROMParse("tracks");


// Vars
var tracks = [];


// Functions


function getFROMParse(coll) {


$.ajax({
  type: 'GET',
  headers: {'X-Parse-Application-Id':'Oj6MmCMSQ2ROp07RSplVe1dCTDFrKk3PlUW6Rj8e',
  'X-Parse-REST-API-Key':'f9xXCHYGn8QvBTMsoi6pZMqPqja5lxxUbT8XIFyg'},
  url: "https://api.parse.com/1/classes/" + coll,
  contentType: "application/json",
  dataType: 'json',
  success: function( data, status ){
    var obj = $.parseJSON(JSON.stringify(data));
       for (var v in obj.results ){    
          tracks.push(obj.results[v].url);

       }
       console.log(tracks);
     
       

       
      
    },
    error: function(xhr, textStatus, err) { //odstampaj textStatus, err jbt
        alert('error');
        alert(textStatus);
        alert(err);
        alert("readyState: "+xhr.readyState+"\n xhrStatus: "+xhr.status);
        alert("responseText: "+xhr.responseText);
    }
  
});
return tracks;
}


function sortList(){
    document.getElementById("#list").innerHTML = '';
    for (var i = 0; i < tracks.length; i++){

        document.getElementById("#list").innerHTML += '<iframe width="420" height="315" src="//www.youtube.com/embed/' + tracks[i] + '" frameborder="0" allowfullscreen></iframe><hr></br>';
    }

}


function pushTrack(){
var txtUrl = document.getElementById("#urlTxt").value;
document.getElementById("#statusText").innerHTML = "";
var TestObject = Parse.Object.extend("tracks");
var testObject = new TestObject();
testObject.save({dishName: txtDish}).then(function(object) {
  document.getElementById("#genText").innerHTML = 
  '<label style="color: green;">Value added</label>';
});
}
	




function Randomize(length){
	return Math.floor(Math.random() * length);
}


