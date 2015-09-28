var lightsOn = JSON.stringify({"on":true});
var lightsOff = JSON.stringify({"on":false});
//var destination = "http://10.0.1.79/api/3ef57fa526e03ca7cac377111cd97d3/lights/4/state";
var response = "";

function sendPutMsg(message, destination) {
    sendMessage('PUT', message, destination);
}

function sendMessage(command, message, destination)
{

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
        }
        http.send(message);
    }
    ;
    console.log(message);
    console.log(x);
    console.log(y);
   
}

function changeColor() {
    var xyColor = transformColor($("#flat").spectrum("get"));
    sendMessage('PUT', xyColor);
}


