
"use strict";
var destination;

//Initialize the light class
class HueLight {
	constructor(room, number, ip, username, located) {
		this.room = room;
		this.number = number;
		this.ip = ip;
		this.username = username;
		this.located = located;
	}	
};

//Fill lightList with list of lights and their properties
var lightList = [
	new HueLight("Zach", "1", "10.0.1.2", "1a40099c2d5d42af1feb3b7430811e27", "top"),
	new HueLight("Zach", "2", "10.0.1.2", "1a40099c2d5d42af1feb3b7430811e27", "bottom"),
	new HueLight("Zach", "3", "10.0.1.2", "1a40099c2d5d42af1feb3b7430811e27", "middle"),
	new HueLight("Zach", "4", "10.0.1.2", "1a40099c2d5d42af1feb3b7430811e27", "desk"),
	new HueLight("Waseem", "1", "10.0.1.3", "228d53983981807f2f762d481558508f", "bottom"),
	new HueLight("Waseem", "2", "10.0.1.3", "228d53983981807f2f762d481558508f", "top"),
	new HueLight("Waseem", "3", "10.0.1.3", "228d53983981807f2f762d481558508f", "nightstand"),
	new HueLight("Waseem", "4", "10.0.1.3", "228d53983981807f2f762d481558508f", "desk"),
	new HueLight("Bala", "11", "10.0.1.3", "228d53983981807f2f762d481558508f", "nighstand"),
	new HueLight("Bala", "12", "10.0.1.3", "228d53983981807f2f762d481558508f", "bottom"),
	new HueLight("Bala", "13", "10.0.1.3", "228d53983981807f2f762d481558508f", "top"),
	new HueLight("Bala", "14", "10.0.1.3", "228d53983981807f2f762d481558508f", "dresser"),
	new HueLight("LivingRoom", "23", "10.0.1.9", "2de1effa3924cd37296e496630b80653", "kitchen"),
	new HueLight("LivingRoom", "24", "10.0.1.9", "2de1effa3924cd37296e496630b80653", "top"),
	new HueLight("LivingRoom", "25", "10.0.1.9", "2de1effa3924cd37296e496630b80653", "tv"),
	new HueLight("LivingRoom", "26", "10.0.1.9", "2de1effa3924cd37296e496630b80653", "bottom"),
	new HueLight("LivingRoom", "27", "10.0.1.9", "2de1effa3924cd37296e496630b80653", "bar")
];

function selectLight(lightID) {
	//Initialize destination URL based on light selection
	var destination = "http://" + lightList[lightID].ip + "/api/" + lightList[lightID].username + "/lights/" + lightList[lightID].number + "/state";
	console.log("set destination to: " + destination);
}
