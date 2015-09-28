var transformColor = function(color) {

//Pick out rgb values from raw color data and throw into an array

r = color["_r"];
g = color["_g"];
b = color["_b"];
rgb = [r,g,b];

//Convert to between 0 and 1

var maximum = Math.max(r,g,b);
rgb[0] = r/maximum;
rgb[1] = g/maximum;
rgb[2] = b/maximum;

//Apply gamma correction to rgb values

if (rgb[0] > 0.04045) {
	rgb[0] = ((rgb[0] + 0.055) / (1 + 0.055)) ^ 2.4;
} else { 
	rgb[0] = rgb[0] / 12.92;
}

if (rgb[1] > 0.04045) {
	rgb[1] = ((rgb[1] + 0.055) / (1 + 0.055)) ^ 2.4;
} else { 
		rgb[1] = rgb[1] / 12.92;
}

if (rgb[2] > 0.04045) {
	rgb[2] = ((rgb[2] + 0.055) / (1 + 0.055)) ^ 2.4;
} else { 
		rgb[2] = rgb[2] / 12.92;
}

//Convert rgb to xyz

x = rgb[0] * 0.649926 + rgb[1] * 0.103455 + rgb[2] * 0.197109;

y = rgb[0] * 0.234327 + rgb[1] * 0.743075 + rgb[2] * 0.022598;

z = rgb[0] * 0.0000000 + rgb[1] * 0.053077 + rgb[2] * 1.035763;

//Convert xyz to xy on Gamut B

x = x / (x + y + z);

y = y / (x + y + z);

//Potentially verify that the xy coordinate lies within Gamut B

//Use the y value as brightness

//Convert xy coordinates to JSON message
return JSON.stringify({"xy":[x,y]});
};





