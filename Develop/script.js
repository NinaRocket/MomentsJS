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


//setting units m.minutes(52);



//color code each block, dynamic

// var r = $("row");
// r.addClass("row");
// var planRow = $("row").append(r);
// $("container").append(planRow);


//eventlistener (onclick) for each timeblock

//user can enter an event, take input (form? text area?)

//save button, save event to local storate

//prevent default so when page is refreshed the event remains