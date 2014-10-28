

// check if global APP namespace exists, if not - create it
var APP = APP || {};

// vars
var POST_SUCCESS_STRING = "Successfully added: ";
var DELETE_SUCCESS_STRING = "Successfully removed: ";
var post_value = "";
var return_value = [];
var dishes = [];
var nations = [];
var adjs = [];

// APP.connector methods
APP.connector = {

	// Functions
	getData: function(table){
		$.ajax({
  			type: 'GET',
  			headers: {'X-Parse-Application-Id':'SyCWUj76oNwCrRpfvO2B5gdkm9uKvMkHNyEjZwCJ',
 			 'X-Parse-REST-API-Key':'ykKXzomRdgxjdWPjPnhqcLFD7OmxAZbavzYOpIwr'},
  			url: "https://api.parse.com/1/classes/" + table,
  			contentType: "application/json",
  			async: false,
  			dataType: 'json',
 			 success: function( data, status ){
    			var obj = $.parseJSON(JSON.stringify(data));
    			if (table === "dishes"){
       				for (var v in obj.results ){    
          			dishes.push(obj.results[v].dishName);
       				}
       			console.log(dishes);
    			}
    			else if (table === "nations"){
        			for (var v in obj.results ){    
          			nations.push(obj.results[v].natName);
       				}
       			console.log(nations);
    			}
    			else if (table === "adj"){
        			for (var v in obj.results ){    
          			adjs.push(obj.results[v].adjName);
       				}
       			console.log(adjs);
      			}
      			else {
       				alert("Unknown table!");
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
 			else if (table === "adj") { return adjs; }
 			else { return "Unknown table!";}
	},
	

	postData: function(table, val){
		// Set post_value to manipulate post data
		if(table === "dishes"){
			post_value = '{"dishName":"' + val + '"}';
		}
		else if (table === "nations") {
			post_value = '{"natName":"' + val + '"}';
		}
		else if (table === "adj") {
			post_value = '{"adjName":"' + val + '"}';
		}
		else {
			alert("Unknown table!");
		}



		// Execute POST method, log success or error according to POST status
		$.ajax({
  			type: 'POST',
  			headers: {'X-Parse-Application-Id':'SyCWUj76oNwCrRpfvO2B5gdkm9uKvMkHNyEjZwCJ',
 			 'X-Parse-REST-API-Key':'ykKXzomRdgxjdWPjPnhqcLFD7OmxAZbavzYOpIwr'},
  			url: "https://api.parse.com/1/classes/" + table,
  			contentType: "application/json",
  			dataType: 'json',
  			async: false,
  			data: post_value,
 			 success: function( data, status ){
    			    console.log("POST status: " + status + "\n" + "Posted: \n" + val + " to: " + table);
    			    return_value[0] = POST_SUCCESS_STRING + val;
    			},
    			error: function(xhr, textStatus, err) { 
        			console.log("Error:")
        			console.log(textStatus);
        			console.log(err);
        			console.log("readyState: "+xhr.readyState+"\n xhrStatus: "+xhr.status);
        			console.log("responseText: "+xhr.responseText);
    			}
  
			});
		return return_value[0];
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

// APP.listener methods
APP.listener = {
    createFocusListener: function(elementId) {
        a = document.getElementById(elementId);
        a.onfocus = function(){
            console.log(elementId + " focused");
            document.getElementById(elementId).addEventListener("keydown", function(e) {
                if (!e) { var e = window.event; }
                e.preventDefault(); // sometimes useful
                console.log("event listener created");
                // Enter is pressed
                if (e.keyCode == 13) {
                    console.log("enter pressed");
                    APP.connector.postData(elementId.slice(1,elementId.length), a.value);
                }
            }, false);
        }

    },

    dummy: function (){
        console.log("dummy");
    }
};




