console.log("Welcome to Community Portal");

let seats = 50;

function showMessage(event){

    event.preventDefault();

    seats--;

    document.getElementById("result").value =
        "Registration Successful! Remaining Seats: " + seats;
}

function showFee(){

    let type =
        document.getElementById("eventType").value;

    let fee = "";

    if(type==="Music")
        fee="Fee : ₹500";

    else if(type==="Sports")
        fee="Fee : ₹300";

    else
        fee="Fee : ₹700";

    document.getElementById("fee").innerHTML = fee;
}

function countChars(){

    let text =
        document.getElementById("feedback").value;

    document.getElementById("count").innerHTML =
        text.length;
}

function findLocation(){

    navigator.geolocation.getCurrentPosition(

        function(position){

            document.getElementById("location").innerHTML =

                "Latitude : " +
                position.coords.latitude +

                "<br>Longitude : " +
                position.coords.longitude;
        },

        function(){

            alert("Location Access Denied");
        }
    );
}

const events = [

{
name:"Music Festival",
category:"Music"
},

{
name:"Sports Day",
category:"Sports"
},

{
name:"Tech Meetup",
category:"Tech"
}

];

events.forEach(function(event){

    console.log(event.name);

});