//when user goes to website, a planner is displayed with the CURRENT day on top

//create table/grid layout to format calendar look

//we want it to stick when the user refreshes the page

//how are we going to do that?
//timer to call persist to 

function persist() {


    for (var i = 9; i < 18; i++) {
        y = $("#text-" + i);
        z = localStorage.getItem(i);
        $("#text-" + i).val(z);
    }
}
//console.log(z);


//curent date and time
let m = moment();
var dayDate = m.format('MMMM Do YYYY');
var dayNum = m.day();
var dayString = m.day(dayNum).format("dddd");

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
console.log(currentHour);




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


