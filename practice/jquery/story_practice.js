// We have two divs, one is #story, and the other was valled #choices

// Make sure the DOM is ready before running jQuery Code.
$(document).ready(function() {
    // Start of the story with a sentence when we load the page.
    $("#story").append("<p>Eduardo woke up.</p>");

    // Create a buttons for choices
    // add abutton for raining
    $("#choices").append("<button id='raining'>It is raining.</button>");
    // add a button for sunny
    $("#choices").append("<button id='sunny'>It is sunny</button>");

    // Selecting the element choice to check for clicks
    // attach an event listener for the raining button.
    $("#raining").click(function () {
        
        // If clickec...

        // Add the choice texts after picking RAINING instead of SUNNY
        // Add to the story with a sentence.
        $("#story").append("<p>Unfortunately it is pouring like a tsunami outside.</p>");

        // Removes the button after you made your choice
        // remove the old choice buttons
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
   


    });

   


























});