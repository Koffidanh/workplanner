// Set up a date and time
var now = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(now)
var dayHr = (moment().format('h'));
var dayHrM = (moment().format('HH'));//////
var dayPm = (moment().format('A'));
// Create time from 08:00 am to 05:00 pm
//Imperial hour
var workTime = ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5"];
//Military hour
var workTimeM = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17"];
//Create a loop to display am and pm
var amPm = ["AM", "AM", "AM", "AM", "PM", "PM", "PM", "PM", "PM", "PM"];

// 1. Create a text for working hours
$("#hours8").text(workTime[0] + " " + amPm[0]);
$("#hours9").text(workTime[1] + " " + amPm[1]);
$("#hours10").text(workTime[2] + " " + amPm[2]);
$("#hours11").text(workTime[3] + " " + amPm[3]);
$("#hours12").text(workTime[4] + " " + amPm[4]);
$("#hours1").text(workTime[5] + " " + amPm[5]);
$("#hours2").text(workTime[6] + " " + amPm[6]);
$("#hours3").text(workTime[7] + " " + amPm[7]);
$("#hours4").text(workTime[8] + " " + amPm[8]);
$("#hours5").text(workTime[9] + " " + amPm[9]);

// A $( document ).ready() block.
$(document).ready(function () {

  //Loop to run the changing color
  //Present/ past/future
  //Loop to change the color to 8am row
  if (dayHr == JSON.parse(workTimeM[0]) ) {
    $("#text8").addClass("present");
    //alert("It is present");
    //  console.log("true");
  } else if (dayHr < JSON.parse(workTimeM[0]) ) {
    $("#text8").addClass("past");
    //alert("It is past");
    //  console.log("true");
  } else if (dayHr > JSON.parse(workTimeM[0]) ) {
    $("#text8").addClass("future");
    //alert("It is future");
    //  console.log("true");
  }
  //Loop to change the color to 9am row
  if (dayHrM == JSON.parse(workTimeM[1]) || dayHr == JSON.parse(workTime[1]) && dayPm == amPm[1]) {
    $("#text9").addClass("present");
    //alert("It is present");
    //  console.log("true");
  } else if (dayHrM > JSON.parse(workTimeM[1]) || dayHr > JSON.parse(workTime[1]) && dayPm == amPm[1])  {
    $("#text9").addClass("past");
    //alert("It is past");
    //  console.log("true");
  } else if (dayHrM < JSON.parse(workTimeM[1]) || dayHr < JSON.parse(workTime[1]) && dayPm == amPm[1]) {
    $("#text9").addClass("future");
    //alert("It is future");
    //  console.log("true");
  }
  //Loop to change the color to 10am row
  if (dayHrM == JSON.parse(workTimeM[2]) || dayHr == JSON.parse(workTime[2]) && dayPm == amPm[2]) {
    $("#text10").addClass("present");
    //alert("It is present");
    //  console.log("true");
  } else if (dayHrM > JSON.parse(workTimeM[2]) || dayHr > JSON.parse(workTime[2]) && dayPm == amPm[2])  {
    $("#text10").addClass("past");
    //alert("It is past");
    //  console.log("true");
  } else if (dayHrM < JSON.parse(workTimeM[2]) || dayHr < JSON.parse(workTime[2]) && dayPm == amPm[2]) {
    $("#text10").addClass("future");
    //alert("It is future");
    //  console.log("true");
  }
//Loop to change the color to 11am row
  if (dayHrM == JSON.parse(workTimeM[3]) || dayHr == JSON.parse(workTime[3]) && dayPm == amPm[3] ) {
    $("#text11").addClass("present");
    //alert("It is present");
    //  console.log("true");
  } else if (dayHrM > JSON.parse(workTimeM[3]) || dayHr > JSON.parse(workTime[3]) && dayPm == amPm[3] ) {
    $("#text11").addClass("past");
    //alert("It is past");
    //  console.log("true");
  } else if (dayHrM < JSON.parse(workTimeM[3]) || dayHr < JSON.parse(workTime[3]) && dayPm == amPm[3]) {
    $("#text11").addClass("future");
    //alert("It is future");
    //  console.log("true");
  }
//Loop to change the color to 12pm row
  if (dayHrM == JSON.parse(workTimeM[4]) || dayHr == JSON.parse(workTime[4]) && dayPm == amPm[4])  {
    $("#text12").addClass("present");
    //alert("It is present");
    //  console.log("true");
  } else if (dayHrM > JSON.parse(workTimeM[4]) || dayHr > JSON.parse(workTime[4]) && dayPm == amPm[4]  ) {
    $("#text12").addClass("past");
    //alert("It is past");
    //  console.log("true");
  } else if (dayHrM < JSON.parse(workTimeM[4]) || dayHr < JSON.parse(workTime[4]) && dayPm == amPm[4] ) {
    $("#text12").addClass("future");
    //alert("It is future");
    //  console.log("true");
  }
//Loop to change the color to 1pm row
  if (dayHrM == JSON.parse(workTimeM[5]) || dayHr == JSON.parse(workTime[5]) && dayPm == amPm[5] ) {
    $("#text1").addClass("present");
    //alert("It is present");
    //  console.log("true");
  } else if (dayHrM > JSON.parse(workTimeM[5]) || dayHr > JSON.parse(workTime[5]) && dayPm == amPm[5]  ) {
    $("#text1").addClass("past");
    //alert("It is past");
    //  console.log("true");
  } else if (dayHrM < JSON.parse(workTimeM[5]) || dayHr < JSON.parse(workTime[5]) && dayPm == amPm[5]  ) {
    $("#text1").addClass("future");
    //alert("It is future");
    //  console.log("true");
  }
//Loop to change the color to 2pm row
  if (dayHrM == JSON.parse(workTimeM[6]) || dayHr == JSON.parse(workTime[6]) && dayPm == amPm[6]  ) {
    $("#text2").addClass("present");
    //alert("It is present");
    //  console.log("true");
  } else if (dayHrM > JSON.parse(workTimeM[6])  || dayHr > JSON.parse(workTime[6]) && dayPm == amPm[6]  ) {
    $("#text2").addClass("past");
    //alert("It is past");
    //  console.log("true");
  } else if (dayHrM < JSON.parse(workTimeM[6])  || dayHr < JSON.parse(workTime[6]) && dayPm == amPm[6]  ) {
    $("#text2").addClass("future");
    //alert("It is future");
    //  console.log("true");
  }
//Loop to change the color to 3pm row
  if (dayHrM == JSON.parse(workTimeM[7]) || dayHr == JSON.parse(workTime[7]) && dayPm == amPm[7]  ) {
    $("#text3").addClass("present");
    //alert("It is present");
    //  console.log("true");
  } else if (dayHrM > JSON.parse(workTimeM[7]) && dayPm == amPm[7]  || dayHr > JSON.parse(workTimeM[7]) ) {
    $("#text3").addClass("past");
    //alert("It is past");
    //  console.log("true");
  } else if (dayHrM < JSON.parse(workTimeM[7])  || dayHr < JSON.parse(workTime[7]) && dayPm == amPm[7]  ) {
    $("#text3").addClass("future");
    //alert("It is future");
    //  console.log("true");
  }
  //Loop to change the color to 4pm row
  if (dayHrM == JSON.parse(workTimeM[8]) || dayHr == JSON.parse(workTime[8]) && dayPm == amPm[8]  ) {
    $("#text4").addClass("present");
    //alert("It is present");
    //  console.log("true");
  } else if (dayHrM > JSON.parse(workTimeM[8]) && dayPm == amPm[8]  || dayHr > JSON.parse(workTimeM[8]) ) {
    $("#text4").addClass("past");
    //alert("It is past");
    //  console.log("true");
  } else if (dayHrM < JSON.parse(workTimeM[8])  || dayHr < JSON.parse(workTime[8]) && dayPm == amPm[8]  ) {
    $("#text4").addClass("future");
    //alert("It is future");
    //  console.log("true");
  }
  //Loop to change the color to 5pm row
  if (dayHrM == JSON.parse(workTimeM[9]) || dayHr == JSON.parse(workTime[9]) && dayPm == amPm[9]  ) {
    $("#text5").addClass("present");
    //alert("It is present");
    //  console.log("true");
  } else if (dayHrM > JSON.parse(workTimeM[9]) && dayPm == amPm[9]  || dayHr > JSON.parse(workTimeM[9]) ) {
    $("#text5").addClass("past");
    //alert("It is past");
    //  console.log("true");
  } else if (dayHrM < JSON.parse(workTimeM[9])  || dayHr < JSON.parse(workTime[9]) && dayPm == amPm[9]  ) {
    $("#text5").addClass("future");
    //alert("It is future");
    //  console.log("true");
  }
  
    //Creating a function for saving button
    //save button for 8am
  $("#saveBtn8").click(function () {
    //Setting variable for the user input
  var input8 = $("#text8").val();
  localStorage.setItem("8AM", JSON.stringify(input8));
  });

//save button for 9am
$("#saveBtn9").click(function () {
  //Setting variable for the user input
var input9 = $("#text9").val();
localStorage.setItem("9AM", JSON.stringify(input9));
});

//save button for 10am
$("#saveBtn10").click(function () {
  //Setting variable for the user input
var input10 = $("#text10").val();
localStorage.setItem("10AM", JSON.stringify(input10));
});

//save button for 11am
$("#saveBtn11").click(function () {
  //Setting variable for the user input
var input11 = $("#text11").val();
localStorage.setItem("11AM", JSON.stringify(input11));
});

//save button for 12pm
$("#saveBtn12").click(function () {
  //Setting variable for the user input
var input12 = $("#text12").val();
localStorage.setItem("12PM", JSON.stringify(input12));
});

//save button for 01pm
$("#saveBtn1").click(function () {
  //Setting variable for the user input
var input1 = $("#text1").val();
localStorage.setItem("1PM", JSON.stringify(input1));
});

//save button for 02pm
$("#saveBtn2").click(function () {
  //Setting variable for the user input
var input2 = $("#text2").val();
localStorage.setItem("2PM", JSON.stringify(input2));
});

//save button for 03pm
$("#saveBtn3").click(function () {
  //Setting variable for the user input
var input3 = $("#text3").val();
localStorage.setItem("3PM", JSON.stringify(input3));
});

//save button for 04pm
$("#saveBtn4").click(function () {
  //Setting variable for the user input
var input4 = $("#text4").val();
localStorage.setItem("4PM", JSON.stringify(input4));
});

//save button for 05pm
$("#saveBtn5").click(function () {
  //Setting variable for the user input
var input5 = $("#text5").val();
localStorage.setItem("5PM", JSON.stringify(input5));
});

//Recall the input
$("#text8").text(JSON.parse(localStorage.getItem("8AM")));
$("#text8").attr("style", "color: black");
$("#text9").text(JSON.parse(localStorage.getItem("9AM")));
$("#text9").attr("style", "color: black");
$("#text10").text(JSON.parse(localStorage.getItem("10AM")));
$("#text10").attr("style", "color: black");
$("#text11").text(JSON.parse(localStorage.getItem("11AM")));
$("#text11").attr("style", "color: black");
$("#text12").text(JSON.parse(localStorage.getItem("12PM")));
$("#text12").attr("style", "color: black");
$("#text1").text(JSON.parse(localStorage.getItem("1PM")));
$("#text1").attr("style", "color: black");
$("#text2").text(JSON.parse(localStorage.getItem("2PM")));
$("#text2").attr("style", "color: black");
$("#text3").text(JSON.parse(localStorage.getItem("3PM")));
$("#text3").attr("style", "color: black");
$("#text4").text(JSON.parse(localStorage.getItem("4PM")));
$("#text4").attr("style", "color: black");
$("#text5").text(JSON.parse(localStorage.getItem("5PM")));
$("#text5").attr("style", "color: black");

});