// Functions
function push(table){
    val = "";
	if (table === "nations"){val = document.getElementById("#nations");}
	else if (table === "dishes"){val = document.getElementById("#dishes");}
	else if (table === "adj"){val = document.getElementById("#adj");}
	else {alert("Unknown table!");}

    if (val.value === ""){
        console.log("Enter a valid text");

    }
    else {
        query = APP.connector.postData(table, val.value);
        document.getElementById(val.id).value = "";
        console.log(query);
        console.log(val);
    }
}

function get(table){
	var query = APP.connector.getData(table);
	console.log(query);
}






// Docoment ready
$( document ).ready(function() {
    APP.listener.createFocusListener("#nations");
    APP.listener.createFocusListener("#dishes");
    APP.listener.createFocusListener("#adj");


});