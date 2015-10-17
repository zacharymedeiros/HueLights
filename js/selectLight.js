"use strict";
window.destination;

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

//Fill lightList with list of lights and their properties (found through UPnP discovery)
var lightList = [
	new HueLight("Zach", "1", "10.0.1.15", "36c82706294f104bc187523c0761ff", "top"),
	new HueLight("Zach", "2", "10.0.1.15", "36c82706294f104bc187523c0761ff", "bottom"),
	new HueLight("Zach", "3", "10.0.1.15", "36c82706294f104bc187523c0761ff", "middle"),
	new HueLight("Zach", "4", "10.0.1.15", "36c82706294f104bc187523c0761ff", "desk"),
	new HueLight("Waseem", "1", "10.0.1.7", "3a40927e39be4dc71949fe921a00f1eb", "bottom"),
	new HueLight("Waseem", "2", "10.0.1.7", "3a40927e39be4dc71949fe921a00f1eb", "top"),
	new HueLight("Waseem", "3", "10.0.1.7", "3a40927e39be4dc71949fe921a00f1eb", "nightstand"),
	new HueLight("Waseem", "4", "10.0.1.7", "3a40927e39be4dc71949fe921a00f1eb", "desk"),
	new HueLight("Bala", "11", "10.0.1.7", "3a40927e39be4dc71949fe921a00f1eb", "nighstand"),
	new HueLight("Bala", "12", "10.0.1.7", "3a40927e39be4dc71949fe921a00f1eb", "bottom"),
	new HueLight("Bala", "13", "10.0.1.7", "3a40927e39be4dc71949fe921a00f1eb", "top"),
	new HueLight("Bala", "14", "10.0.1.7", "3a40927e39be4dc71949fe921a00f1eb", "dresser"),
	new HueLight("LivingRoom", "23", "10.0.1.9", "2de1effa3924cd37296e496630b80653", "kitchen"),
	new HueLight("LivingRoom", "24", "10.0.1.9", "2de1effa3924cd37296e496630b80653", "top"),
	new HueLight("LivingRoom", "25", "10.0.1.9", "2de1effa3924cd37296e496630b80653", "tv"),
	new HueLight("LivingRoom", "26", "10.0.1.9", "2de1effa3924cd37296e496630b80653", "bottom"),
	new HueLight("LivingRoom", "27", "10.0.1.9", "2de1effa3924cd37296e496630b80653", "bar")
];


function selectLight(lightID) {
	//Initialize destination URL based on light selection
	window.destination = "http://" + lightList[lightID].ip + "/api/" + lightList[lightID].username + "/lights/" + lightList[lightID].number + "/state";
	console.log("set destination to: " + window.destination);
}
