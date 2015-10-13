FB.api('/me', function(response) {
    window.username=(response);
});

window.setup = function() {
if (username = "Zach Medeiros") {
	$("h5").show();
}
else if (username = "Waseem Ahmad") {
	$("h6").show();
}
else if (username = "Prashanth Bala") {
	$("h7").show();
}
}

