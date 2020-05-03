//function to get the stored items to keep them on the page after refreshing
function persist() {


    for (var i = 9; i < 18; i++) {
        y = $("#text-" + i);
        z = localStorage.getItem(i);
        $("#text-" + i).val(z);
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
    var x = $("#" + i);

    var hour = parseInt($(x).attr("data-hour"));

    if (hour < currentHour) {
        $(x).addClass("past");
    }
    else if (currentHour === hour) {
        $(x).addClass("present");
    }
    else if (hour > currentHour) {
        $(x).addClass("future");
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


