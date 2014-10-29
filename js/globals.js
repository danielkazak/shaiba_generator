/**
 * Created by Pelephone on 29/10/2014.
 */

// The words tables
var dishesTable = [];
var nationsTable = [];
var adjTable = [];

// Consts
var STATUS_LABEL_ELEMENT = document.getElementById("#statuslabel");
var POST_SUCCESS_STRING = "Successfully added: ";
var PARSE_FAILED_ERROR = "Didn't success cause of parse";
var DELETE_SUCCESS_STRING = "Successfully removed: ";
var EMPTY_STRING_ERROR = "Please type a valid name";
var ALREADY_EXISTS_ERROR = "The name you typed already exists";
var VALID_NAME = "valid string";
var ENTER_KEY_NUMBER = 13;

// Initializations
$( document ).ready(function() {
    APP.connector.getData('dishes');
    APP.connector.getData('nations');
    APP.connector.getData('adj');
});