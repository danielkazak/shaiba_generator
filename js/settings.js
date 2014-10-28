// Functions
function push(table){
	if (table === "nations"){var val = document.getElementById("#nationTxt").value;}
	else if (table === "dishes"){var val = document.getElementById("#dishTxt");}
	else if (table === "adj"){var val = document.getElementById("#adjTxt").value;}
	else {alert("Unknown table!");}
	
	var query = APP_DB.connector.postData(table, val.value);
	document.getElementById(val.id).value = "";
	console.log(query);
}

function get(table){
	var query = APP_DB.connector.getData(table);
	console.log(query);
}



function enterPressed(table){
	console.log(document.activeElement.id);
document.getElementById(document.activeElement.id).addEventListener("keydown", function(e) {
    if (!e) { var e = window.event; }
    //e.preventDefault(); // sometimes useful

    // Enter is pressed
    if (e.keyCode == 13) { push(table); }
}, false);
}

var a = document.getElementById("#nationTxt");
a.onfocus = function(){
	console.log("focused");
}