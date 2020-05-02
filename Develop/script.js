//when user goes to website, a planner is displayed with the CURRENT day on top

//create table/grid layout to format calendar look

//curent date and time
let m = moment();

//console.log("toString() => ${ m.toString() }");
//m.set("day", 4);

// using a format
//m = moment("05/01/2019 6:55PM", "MM/DD/YYYY h:mmA");
console.log(m.toString());
//getting units
console.log(m.minutes());
console.log(m.hour());
console.log(m.week());
console.log(m.get("quarter"));
var current = m.toString();
$("#currentDay").text(current);
console.log(current);

//var h = m.hour(9);

//setting units m.minutes(52);

var currentHour = m.hour();
console.log(currentHour);

//color code each block, dynamic

var element = document.querySelector("time-block");

// style = window.getComputedStyle(element),
// top = style.getPropertyValue('top');

//set hour for each column to compare time to

var h9 = $("#nineAM");
h9 = 9;
console.log(h9);
var planHour = $(".hour");

if (currentHour < h9) {


    $("#nineAM").addClass("future");

} else if (currentHour === h9) {
    $("#nineAM").addClass("present");
}
else
    $("#nineAM").addClass("past");

console.log("no");

var h10 = $("#tenAM");
h10 = 10;
if (currentHour < h10) {
    $("#tenAM").addClass("future");
}



//eventlistener (onclick) for each timeblock

//user can enter an event, take input (form? text area?)

//save button, save event to local storate

//prevent default so when page is refreshed the event remains