/**
 * Created by Pelephone on 29/10/2014.
 */

// The words tables
var dishesTable = [];
var nationsTable = [];
var adjsTable = [];
var STATUS_LABEL_ELEMENT = document.getElementById("#statuslabel");

// Initializations
$( document ).ready(function() {
    APP.connector.getData('dishes');
    APP.connector.getData('nations');
    APP.connector.getData('adj');
});