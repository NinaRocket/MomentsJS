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

//console.log("toString() => ${ m.toString() }");
//m.set("day", 4);

// using a format
//m = moment("05/01/2019 6:55PM", "MM/DD/YYYY h:mmA");
// console.log(m.toString());
// //getting units
// console.log(m.minutes());
// console.log(m.hour());
// console.log(m.week());
// console.log(m.get("quarter"));
var current = m.toString();
$("#currentDay").text(current);
//console.log(current);

//var h = m.hour(9);

//setting units m.minutes(52);

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


