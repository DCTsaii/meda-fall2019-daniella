
$(document).ready(function() {
    
    $("#story").append("<p>Roadtrip to the Redwoods National Park</p>");

    $("#choices").append("<button id='early'>Leave at 5AM</button>");
    $("#choices").append("<button id='late'>Leave at 8AM</button>");

    // CSS
    $("#early").css("background-color", "#BFBA73");
    $("#early").css("font-size", "18px");
    $("#early").css("font-family", "monospace");
    $("#early").css("color", "#172610");

    $("#late").css("background-color", "#BFBA73");
    $("#late").css("font-size", "18px");
    $("#late").css("font-family", "monospace");
    

    // EARLY START

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

        // CSS
        $("#boring").css("background-color", "#BFBA73");
        $("#boring").css("font-size", "18px");
        $("#boring").css("font-family", "monospace");

        $("#not_boring").css("background-color", "#BFBA73");
        $("#not_boring").css("font-size", "18px");
        $("#not_boring").css("font-family", "monospace");

    });

     // EARLY END

    // LATE START

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
        
        // CSS 
        $("#go").css("background-color", "#BFBA73");
        $("#go").css("font-size", "18px");
        $("#go").css("font-family", "monospace");

        $("#wait").css("background-color", "#BFBA73");
        $("#wait").css("font-family", "monospace");
        $("#wait").css("font-size", "18px");

    });

    // LATE END


});

