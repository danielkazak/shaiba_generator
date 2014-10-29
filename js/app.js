

// check if global APP namespace exists, if not - create it
var APP = APP || {};

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
                    dishesTable.length = 0;
       				for (var v in obj.results ){    
          			dishesTable.push(obj.results[v].dishName);
       				}
       			console.log(dishesTable);
    			}
    			else if (table === "nations"){
                    nationsTable.length = 0;
        			for (var v in obj.results ){    
          			nationsTable.push(obj.results[v].natName);
       				}
       			console.log(nationsTable);
    			}
    			else if (table === "adj"){
                    adjTable.length = 0;
        			for (var v in obj.results ){    
          			adjTable.push(obj.results[v].adjName);
       				}
       			console.log(adjTable);
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
	},

	postData: function(table, val){
        var validationResult = APP.operations.validate(table, val);

        if (validationResult != VALID_NAME) {
            return validationResult;
        }

        var post_value = "";
        var returnValue = "";

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
    			    returnValue = POST_SUCCESS_STRING;
    			},
    			error: function(xhr, textStatus, err) { 
        			console.log("Error:")
        			console.log(textStatus);
        			console.log(err);
        			console.log("readyState: "+xhr.readyState+"\n xhrStatus: "+xhr.status);
        			console.log("responseText: "+xhr.responseText);
                    returnValue = PARSE_FAILED_ERROR;
    			}
  
			});
		return returnValue;
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

            switch (elementId){
                case "#dishes":
                   STATUS_LABEL_ELEMENT.innerHTML = "ENTER רשום מנה ולחץ ";
                    break;
                case "#nations":
                    STATUS_LABEL_ELEMENT.innerHTML = "ENTER רשום לאום ולחץ ";
                    break;
                case "#adj":
                    STATUS_LABEL_ELEMENT.innerHTML = "ENTER רשום תוספת ולחץ ";
                    break;
            }
        }
    },

    createKeyListener: function(elementId) {
        var a = document.getElementById(elementId);
        a.addEventListener("keydown", function(e) {
            if (!e) { var e = window.event; }
            var newString = elementId.slice(1, elementId.length);
            if (e.keyCode === ENTER_KEY_NUMBER) {
                var query = APP.connector.postData(newString, a.value);
                if (query === POST_SUCCESS_STRING) {
                    APP.connector.getData(newString);
                }
                console.log(query);
                STATUS_LABEL_ELEMENT.innerHTML = query;
                document.getElementById(elementId).value = "";
            }
        }, false);
    }
};

APP.operations = {
    validate: function(tableName, val) {
        // Checks if the new value is an empty string
        if (val === "") return EMPTY_STRING_ERROR;

        // Checks if the new value already exists
        var table = [];

        if (tableName === "dishes") {
            table = dishesTable;
        }
        else if (tableName === "nations") {
            table = nationsTable;
        }
        else if (tableName === "adj") {
            table = adjTable;
        }

        var tableLength = table.length;

        for (var i = 0; i < tableLength; i++) {
            if (table[i] === val) {
                return ALREADY_EXISTS_ERROR;
            }
        }

        return VALID_NAME;
    }
};