//function to get the stored items to keep them on the page after refreshing
function persist() {


    for (var i = 9; i < 18; i++) {
        //grabbing the info by the text id plus # which correlates to time
        rowTime = $("#text-" + i);
        savedMeeting = localStorage.getItem(i);
        rowTime.val(savedMeeting);
    }
}

//curent date and time
let m = moment();
var dayDate = m.format('MMMM Do YYYY');
var dayNum = m.day();
var dayString = m.day(dayNum).format("dddd");
//display day of week and date on page
$("#currentDay").text(dayString + " " + dayDate);


var currentHour = m.hour();
//loops through rows to compare times for block color
for (var i = 9; i < 18; i++) {
    //variable for id# which correlates to time
    var hourID = $("#" + i);

    var hour = parseInt($(hourID).attr("data-hour"));

    if (hour < currentHour) {
        $(hourID).addClass("past");
    }
    else if (currentHour === hour) {
        $(hourID).addClass("present");
    }
    else if (hour > currentHour) {
        $(hourID).addClass("future");
    }
}


//eventlistener (onclick) for save button //save button, save event to local storate
$(".saveBtn").on("click", function (event) {
    //prevent default so when page is refreshed the event remains
    event.preventDefault();

    for (var i = 9; i < 18; i++) {
        var textID = $("#text-" + i);
        var text = $("#text-" + i).val();
        var time = i;
        textID = localStorage.setItem(time, text);
    }

});

persist();


