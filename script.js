// Set up a date and time
$("#currentDay").text((moment().format('MMMM Do YYYY, h:mm:ss a')));
//Create a legends
$("#legend").text = "Legends:"
// Create time from 08:00 am to 05:00 pm
$(document).ready(function () {
    for (let i = 8; i <= 17; i++) {
        console.log(i);
        var newRow = $(".clonedRow:first").clone();
        $(newRow).insertAfter(".clonedRow");
        $("#hours").text(i);

        // var newRowDescr = $(".cloneInput:first").clone();
        // $(newRowDescr).insertAfter(".cloneInput");

        // var newRowSaveBtn = $(".cloneBtn:first").clone();
        // $(newRowDescr).insertAfter(".cloneBtn");
    }
});
//Popover button
// $(document).ready(function(){
//     $('[data-toggle="popover"]').popover();   
// });