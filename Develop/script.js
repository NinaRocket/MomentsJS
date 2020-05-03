//when user goes to website, a planner is displayed with the CURRENT day on top

//create table/grid layout to format calendar look

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


//input into textarea
// $("#plans").submit(function (event) {
//     event.preventDefault();
//     //var eventData = $("textarea");3
//     localStorage.setItem("#plans");

//     console.log("your mom");
// });


//eventlistener (onclick) for save button //save button, save event to local storate
$(".saveBtn").on("click", function (event) {
    //prevent default so when page is refreshed the event remains
    //event.preventDefault();

    var text = $("#plansText").val();
    //var text = document.getElementById("plansText");
    //text.value = localStorage.getItem("plansText");

    localStorage.setItem("plansText", text);


    console.log(text);
});





