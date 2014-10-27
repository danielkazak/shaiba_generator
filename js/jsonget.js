/*function getData(){
 var dishes = [];
 var nations = [];
 var adjs = [];

$.ajax({                    
    url: 'shaiba.json',
    dataType: 'json',
    cache: false,
    success: function( data, status ){
        alert('radi');
        alert(JSON.stringify(data));
       var obj = $.parseJSON(JSON.stringify(data));
      
       for (var v in obj.dishArray ){    
          dishes.push(obj.dishArray[v].dishName);
       }
       for (var v in obj.nationArray ){    
          nations.push(obj.nationArray[v].nationName);
       }
       for (var v in obj.adjArray ){    
          adjs.push(obj.adjArray[v].adjectiveName);
       }

       console.log(dishes);
       console.log(nations);
       console.log(adjs);
      
    },
    error: function(xhr, textStatus, err) { //odstampaj textStatus, err jbt
        alert('ne radi');
        alert(textStatus);
        alert(err);
        alert("readyState: "+xhr.readyState+"\n xhrStatus: "+xhr.status);
        alert("responseText: "+xhr.responseText);
    }
}); 
}*/