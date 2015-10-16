window.activatePersonalControls = function() {

	FB.api('/me', function(response) {
	    window.username=(response["name"]);
	});

	if (window.username == "Zach Medeiros") {
		$("h5").show();
	}
	else if (window.username == "Waseem Ahmad") {
		$("h6").show();
	}
	else if (window.username == "Prashanth Bala") {
		$("h7").show();
	}
};

