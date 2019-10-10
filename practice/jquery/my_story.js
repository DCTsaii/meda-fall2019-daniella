
$(document).ready(function() {
    
    $("#story").append("<p>Roadtrip to the Redwoods National Park</p>");

    
    $("#choices").append("<button id='early'>Leave at 5AM</button>");
    $("#choices").append("<button id='late'>Leave at 8AM</button>");

    // EARLY

    $("#early").click(function () {
        $("#story").append("<p>You avoided the morning rush hour, now pick a route:</p>");
        $("#early").remove();
        $("#late").remove();
        
        $("#choices").append("<button id='boring'>US Highway 101 North</button>");
        $("#choices").append("<button id='not_boring'>California Highway 1</button>");

        $("#boring").click(function() { 
            $("#story").append("<p>Faster router but it lacks scenic views.</p>");
            $("#boring").remove();
            $("not_boring").remove();
        });

        $("#not_boring").click(function () {
            $("#story").append("<p>Longer route but it has breathtaking scenic views.</p>");
            $("#boring").remove();
            $("#not_boring").remove();
        });


    });

    // LATE

    $("#late").click(function () {
        $("#story").append("<p>Unfortunately you're stuck the morning rush hour, expect delays ahead!</p>");
        $("#early").remove();
        $("#late").remove();
    
        $("#choices").append("<button id='go'>Take a chance</button>");
        $("#choices").append("<button id='wait'>Wait it out</button>");

        $("#go").click(function() { 
            $("#story").append("<p>You're a little stressed out after being stuck in the traffic jam for about a hour but you've made it through.</p>");
            $("#go").remove();
            $("wait").remove();
        });


        $("#wait").click(function () {
            $("#story").append("<p>This choice has affected your arrival time.</p>");
            $("#go").remove();
            $("#wait").remove();
        });



    });



});

