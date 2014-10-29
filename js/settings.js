// Functions
function push(table){
    var val = null;
	if (table === "nations"){val = document.getElementById("#nations");}
	else if (table === "dishes"){val = document.getElementById("#dishes");}
	else if (table === "adj"){val = document.getElementById("#adj");}
	else {
        alert("Unknown table!");
        return;
    }

    var query = APP.connector.postData(table, val.value);
    APP.connector.getData(table);
    document.getElementById(val.id).value = "";
    console.log(query);
    console.log(val);
}

function get(table){
	var query = APP.connector.getData(table);
	console.log(query);
}


// Document ready
$( document ).ready(function() {
    APP.listener.createKeyListener("#nations");
    APP.listener.createKeyListener("#dishes");
    APP.listener.createKeyListener("#adj");

});
