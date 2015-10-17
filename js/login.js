window.activatePersonalControls = function() {
	FB.api('/me', function(response) {
	    window.username=(response["name"]);
	});

	if (window.username == "Zach Medeiros") {
		$("#zach").show();
	}
	else if (window.username == "Waseem Ahmad") {
		$("#waseem").show();
	}
	else if (window.username == "Prashanth Bala") {
		$("#bala").show();
	}
};

