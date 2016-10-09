function handler() {
	console.log("init");
}

$(handler);

var doneFunction = function(msg) {
	var response = JSON.parse(msg);
	$("#responseAriaID").val(msg);
	console.log("response", response);
}

var failFunction = function(msg) {
	console.log("error", msg);
	alert("Algo salio mal :S, checa el log");
}

function ajaxPOST() {
	var id = $("#inputPOST_ID").val();
	ajaxPOST_FORM(id);
}

function ajaxPOST_FORM(id) {
	var data = {
		id : id
	};
	var ajaxConf = {
		method : "POST",
		url : "/rest-back/ws/rest/pocForm",
		data : data
	}
	var jqXHR = $.ajax(ajaxConf);
	jqXHR.done(doneFunction);
	jqXHR.fail(failFunction);
}

function ajaxGET() {
	var ajaxConf = {
		method : "GET",
		url : "/rest-back/ws/rest/poc"
	}
	var jqXHR = $.ajax(ajaxConf);
	jqXHR.done(doneFunction);
	jqXHR.fail(failFunction);
}
