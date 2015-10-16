var lightsOn = JSON.stringify({"on":true});
var lightsOff = JSON.stringify({"on":false});
var response = "";

function sendPutMsg(message) {
    sendMessage('PUT', message, destination);
}

function sendMessage(command, message)
{
console.log(window.destination);
    if (window.XMLHttpRequest)

    {
        var http = new XMLHttpRequest();
    
        http.open(command, destination, true);
        http.setRequestHeader("Content-type", "application/json");

        http.onreadystatechange = function()
        {
            if(http.readyState == 4)
            {
                if(http.status==200)
                {
                    response="Bad JSON: "+http.responseText
                    response=JSON.stringify(JSON.parse(http.responseText), null, '\t');
                }
                else
                { 
                    response="Error "+http.status
                }
            }
        };
        http.send(message);
    }

//Useful for debugging:   
//console.log(message);
//console.log(x);
//console.log(y);
   
}

function changeColor() {
    var xyColor = transformColor($("#flat").spectrum("get"));
    sendMessage('PUT', xyColor);
}


