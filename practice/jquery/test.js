// ADDITIONAL OUTCOME FOR LATE

    $("#story").append("<p>You're feeling a little hungry! You spotted a exit sign for food 5 miles away... </p>");

    $("#choices").append("<button id='exit'>Exit</button>");
    $("#choices").append("<button id='keep_driving'>Keep driving.</button>");

    $("#exit").click(function() { 
        $("#story").append("<p>You feel a lot better after eating a meal at Inn and Out.</p>");
        $("#exit").remove();
        $("keep_driving").remove();
    });

    $("#keep_driving").click(function() { 
        $("#story").append("<p>You're hungry and it's affecting your mood but you're trying your best to stay focus.</p>");
        $("#exit").remove();
        $("keep_driving").remove();
    });
    // CSS 
    $("#exit").css("background-color", "#BFBA73");
    $("#exit").css("font-size", "18px");
    $("#exit").css("font-family", "monospace");

    $("#keep_driving").css("background-color", "#BFBA73");
    $("#keep_driving").css("font-size", "18px");
    $("#keep_driving").css("font-family", "monospace");

    // END

    // START

    $("#story").append("<p>You have arrived at Crescent City!</p>");

    $("#choices").append("<button id='hotel'>Stay in a Inn</button>");
    $("#choices").append("<button id='campground'>Look for a campground</button>");

    $("#hotel").click(function() { 
        $("#story").append("<p>Since you arrived early, you were able to find a Inn for a good rate and free wi-fi and complimentary breakfast in the morning. You made through your day 1 in this adventure.</p>");
        $("#hotel").remove();
        $("campground").remove();
    });

    $("#campground").click(function() { 
        $("#story").append("<p>Since you arrived early, you were able to find a very good campground with running water public restrooms and shower rooms. And you settled down in a very nice spacious and somewhat private site near by a river. You made it through your day 1 in this adventure.</p>");
        $("#hotel").remove();
        $("campground").remove();
    });

    // CSS
    $("#hotel").css("background-color", "#BFBA73");
    $("#hotel").css("font-size", "18px");
    $("#hotel").css("font-family", "monospace");

    $("#campground").css("background-color", "#BFBA73");
    $("#campground").css("font-size", "18px");
    $("#campground").css("font-family", "monospace");

    //END



    // ADDITIONAL OUTCOME FOR LATE

    // START

    $("#story").append("<p>You have arrived at Crescent City in the evening!</p>");

    $("#choices").append("<button id='late_hotel'>Stay in a Inn</button>");
    $("#choices").append("<button id='late_campground'>Look for a campground</button>");

    $("#late_hotel").click(function() { 
        $("#story").append("<p>Since you arrived late, most of the Inns were fully booked. After driving for a while looking for hotels, you were able to find a spot at a rundown hotel that didn't offer any complimentary breakfast or free wi-fi, on that of that the TV wasn't working properly, the room had a funny smell and the bedsheets had stains on it. You tried to make a complaint in the frontdesk for a request to switch rooms but this was the only room available. It was a rough night, but you made through your day 1 in this adventure.</p>");
        $("#late_hotel").remove();
        $("late_campground").remove();
    });

    $("#late_campground").click(function() { 
        $("#story").append("<p>Since you arrived late, all the popular & good campgrounds and the nearest campgrounds were full. After driving for a good 45 minutes, you were able to find a campground that had a few spots available. It was getting dark so you just parked your car at the very first empty site you saw to settle down and start assembling your camping tent. Unfortunately the previous campers in the site picked a spot a few inches away as a restroom. You're having a very unplesant night and you barely it through your day 1 in this adventure. </p>");
        $("#late_hotel").remove();
        $("late_campground").remove();
    });

    // CSS
    $("#late_hotel").css("background-color", "#BFBA73");
    $("#late_hotel").css("font-size", "18px");
    $("#late_hotel").css("font-family", "monospace");

    $("#late_campground").css("background-color", "#BFBA73");
    $("#late_campground").css("font-size", "18px");
    $("#late_campground").css("font-family", "monospace");

    // END

