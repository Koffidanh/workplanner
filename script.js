// A $( document ).ready() block.
$(document).ready(function () {
  // Set up a date and time
  //Calling out time
  var now = moment().format("dddd, MMMM Do YYYY");
  //Setting time id
  $("#currentDay").text(now);
  //Calling out imperial hour
  var dayHr = (moment().format('h'));
  //Calling out military hour
  var dayHrM = (moment().format('HH'));
  //Calling out am or pm
  var dayPm = (moment().format('A'));
  // Create time from 08:00 am to 05:00 pm
  var workTime = ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5"];
  var workTimeM = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17"];
  //Create a loop to display am and pm
  var amPm = ["AM", "AM", "AM", "AM", "PM", "PM", "PM", "PM", "PM", "PM"];

  //Create a div for working hours
  for (let i = 0; i < workTime.length; i++) {
    $(`#hours${i}`).text(workTime[i] + " " + amPm[i]);
  }
  //Loop to run the changing color
  //Present/ past/future
  for (let i = 0; i < workTime.length; i++) {
    if (dayHrM == JSON.parse(workTimeM[i]) || dayHr == JSON.parse(workTime[i]) && dayPm == amPm[i]) {
      $(`#text${i}`).addClass("present");
      //alert("It is present");
      //  console.log("true");
    } else if (dayHrM > JSON.parse(workTimeM[i]) || dayHr > JSON.parse(workTime[i]) && dayPm == amPm[i]) {
      $(`#text${i}`).addClass("past");
      //alert("It is past");
      //  console.log("true");
    } else if (dayHrM < JSON.parse(workTimeM[i]) || dayHr < JSON.parse(workTime[i]) && dayPm == amPm[i]) {
      $(`#text${i}`).addClass("future");
      //alert("It is future");
      //  console.log("true");
    }
  }
  //Creating a function for saving button
  for (let i = 0; i < workTime.length; i++) {
    $(`#saveBtn${i}`).click(function () {
      //Setting variable for the user input
      var input = $(`#text${i}`).val();
      localStorage.setItem(i, JSON.stringify(input));
    });
  }
  //Recall the input
  for (let i = 0; i < workTime.length; i++) {
    $(`#text${i}`).text(JSON.parse(localStorage.getItem(i)));
    $(`#text${i}`).attr("style", "color: black");
  }
});