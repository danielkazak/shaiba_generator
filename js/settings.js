// Functions
function push(table){
	if (table === "nations"){var val = document.getElementById("#nationTxt");}
	else if (table === "dishes"){var val = document.getElementById("#dishTxt");}
	else if (table === "adj"){var val = document.getElementById("#adjTxt");}
	else {alert("Unknown table!");}

    if (val.value === ""){
        console.log("Enter a valid text");

    }
    else {
        var query = APP.connector.postData(table, val.value);
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
    APP.listener.createFocusListener("#nationTxt");
    APP.listener.createFocusListener("#dishTxt");
    APP.listener.createFocusListener("#adjTxt");
});