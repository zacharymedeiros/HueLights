FB.api('/me', function(response) {
    console.log(JSON.stringify(response));
});


FB.api('/me', function(response) {
    window.username=(response);
});

if (username = "Zach Medeiros") {
	$("h5").hide();
}
else if (username = "Waseem Ahmad") {
	$("h6").hide();
}
else if (username = "Prashanth Bala") {
	$("h7").hide();
}

}
