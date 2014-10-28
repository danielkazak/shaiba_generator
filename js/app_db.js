

// check if global APP_DB namespace exists, if not - create it
var APP_DB = APP_DB || {};

// vars
var POST_SUCCESS_STRING = "Successfully added: ";
var DELETE_SUCCESS_STRING = "Successfully removed: ";
var post_value = "";
var return_value = "";
var dishes = [];
var nations = [];
var adjs = [];

// APP_DB.connector methods
APP_DB.connector = {

	// Functions
	getData: function(table){
		$.ajax({
  			type: 'GET',
  			headers: {'X-Parse-Application-Id':'SyCWUj76oNwCrRpfvO2B5gdkm9uKvMkHNyEjZwCJ',
 			 'X-Parse-REST-API-Key':'ykKXzomRdgxjdWPjPnhqcLFD7OmxAZbavzYOpIwr'},
  			url: "https://api.parse.com/1/classes/" + table,
  			contentType: "application/json",
  			dataType: 'json',
 			 success: function( data, status ){
    			var obj = $.parseJSON(JSON.stringify(data));
    			if (table === "dishes"){
       			for (var v in obj.results ){    
          			dishes.push(obj.results[v].dishName);
       			}
       			console.log(dishes);
    			}else if (table === "nations"){
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
    			error: function(xhr, textStatus, err) { 
        			alert('ne radi');
        			alert(textStatus);
        			alert(err);
        			alert("readyState: "+xhr.readyState+"\n xhrStatus: "+xhr.status);
        			alert("responseText: "+xhr.responseText);
    			}
  
			});
			if (table === "dishes"){  return dishes; }
 			else if (table === "nations"){return nations;}
 			else { return adjs; }
	},
	

	postData: function(table, val){
		// Set post_value to manipulate post data
		if(table === "dishes"){
			post_value = '{"dishName":"' + val + '"}';
		}
		else if (table === "nations") {
			post_value = '{"natName":"' + val + '"}';
		}
		else {
			post_value = '{"adjName":"' + val + '"}';
		}



		// Execute POST method, log success or error according to POST status
		$.ajax({
  			type: 'POST',
  			headers: {'X-Parse-Application-Id':'SyCWUj76oNwCrRpfvO2B5gdkm9uKvMkHNyEjZwCJ',
 			 'X-Parse-REST-API-Key':'ykKXzomRdgxjdWPjPnhqcLFD7OmxAZbavzYOpIwr'},
  			url: "https://api.parse.com/1/classes/" + table,
  			contentType: "application/json",
  			dataType: 'json',
  			data: post_value,
 			 success: function( data, status ){
    			    console.log("POST status: " + status + "\n" + "Posted: \n" + val + " to: " + table);
    			},
    			error: function(xhr, textStatus, err) { 
        			console.log("Error:")
        			console.log(textStatus);
        			console.log(err);
        			console.log("readyState: "+xhr.readyState+"\n xhrStatus: "+xhr.status);
        			console.log("responseText: "+xhr.responseText);
    			}
  
			});
		
	},

	remove: function(table, val){
		// Execute POST method, log success or error according to POST status
		$.ajax({
  			type: 'DELETE',
  			headers: {'X-Parse-Application-Id':'SyCWUj76oNwCrRpfvO2B5gdkm9uKvMkHNyEjZwCJ',
 			 'X-Parse-REST-API-Key':'ykKXzomRdgxjdWPjPnhqcLFD7OmxAZbavzYOpIwr'},
  			url: "https://api.parse.com/1/classes/" + table + "/" + val,
  			contentType: "application/json",
  			dataType: 'json',
 			 success: function( data, status ){
    			    console.log("DELETE status: " + status + "\n" + "Removed: \n" + val);
    			    return DELETE_SUCCESS_STRING + data;
    			},
    			error: function(xhr, textStatus, err) { 
        			console.log("Error:")
        			console.log(textStatus);
        			console.log(err);
        			console.log("readyState: "+xhr.readyState+"\n xhrStatus: "+xhr.status);
        			console.log("responseText: "+xhr.responseText);
    			}
  
			});
	}

};


//APP_DB.connector.createConnector("SyCWUj76oNwCrRpfvO2B5gdkm9uKvMkHNyEjZwCJ", "W4RDU3xDaHX9VgpOv2oJzFkCyItDzA5MMGk5v69l");


