
$(document).ready(function() {
    
    $("#story").append("<p>Eduardo woke up.</p>");

    
    $("#choices").append("<button id='raining'>It is raining.</button>");
    $("#choices").append("<button id='sunny'>It is sunny</button>");
    $("#raining").click(function () {
        
        
        $("#story").append("<p>Unfortunately it is pouring like a tsunami outside.</p>");

        
        $("#raining").remove();
        $("#sunny").remove();
        
        // The outcome of the previous choices
        // add the new buttons
        $("#choices").append("<button id='umbrella'>Find Umbrella</button>");
        $("#choices").append("<button id='forget'>Forget about the Umbrella</button>");

        // attach an event listener for the umbrella button.
        $("#umbrella").click(function() {

            // if clicked...

            // add to the story with a sentence.
            $("#story").append("<p>Eduardo took the umbrella, and lived happily ever after.</p>");
 
            // remove the old choice buttons
            $("#umbrella").remove();
            $("forget").remove();
        });


        // attach an event listener for the forget button.
        $("#forget").click(function () {
            
            // if clicked...

            // add to the story with a sentence.     
            $("#story").append("<p>Eduardo forgot his umbrella, and then get soaked, and get sick.</p>");

            // remove the old choice buttons
            $("#umbrella").remove();
            $("#forget").remove();




        });

        $("#sunny").click(function(){

            $("#story").append("<p>Unfortunately it's extremely hot.</p>");




        });
   


    });

   


























});