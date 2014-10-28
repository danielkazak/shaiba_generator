


// Functions
function push(table){
	if (table === "nations"){var val = document.getElementById("#nationTxt").value;}
	else if (table === "dishes"){var val = document.getElementById("#dishTxt").value;}
	else if (table === "adj"){var val = document.getElementById("#adjTxt").value;}
	else {alert("Unknown table!");}
	
	var query = APP_DB.connector.postData(table, val);
	console.log(query);
}

function get(table){
	var query = APP_DB.connector.getData(table);
	console.log(query);
}









/*Parse.initialize("SyCWUj76oNwCrRpfvO2B5gdkm9uKvMkHNyEjZwCJ", "W4RDU3xDaHX9VgpOv2oJzFkCyItDzA5MMGk5v69l");*/


/*function pushNew(parameter) {
	document.getElementById("#genText").innerHTML = "";
	var name = generateLabelName(parameter)
	if (parameter === "dish") {
		pushDish(name);
	} else if (parameter === "nation") {
		pushNation(name);
	} else if (parameter === "adj") {
		pushAdj(name);
	} else { alert("what the fuck?"); }
}*/

/*(function pushDish(dishLabel) {
	var TestObject = Parse.Object.extend("dishes");
	var testObject = new TestObject();
	var dish = document.getElementById(dishLabel).value;
	testObject.save({dishName: dish}).then(function(object) {
		successMessage('Dish', dishLabel);
	});
}*/

/*function pushNation(nationLabel) {
	var TestObject = Parse.Object.extend("nations");
	var testObject = new TestObject();
	var nation = document.getElementById(nationLabel).value;
	testObject.save({natName: nation}).then(function(object) {
	  successMessage('Nation', nationLabel);
	});	
}*/

/*function pushAdj(adjLabel) {
	var TestObject = Parse.Object.extend("adj");
	var testObject = new TestObject();
	var adj = document.getElementById(adjLabel).value;
	testObject.save({adjName: adj}).then(function(object) {
	  successMessage('Adjective', adjLabel);
	});
}*/

/*function generateLabelName(parameter) {
	var text = '#' + parameter + 'Txt';
	return	text;
}

function successMessage(name, label) {
	document.getElementById("#genText").innerHTML = 
	  '<label style="color: green; font-size: 40px;">' + name + ' added</label>';
	document.getElementById(label).value = "";
}*/

