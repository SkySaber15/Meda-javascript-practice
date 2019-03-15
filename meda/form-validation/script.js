"use strict";
//makes sure that the script file is attached to the html file
console.log("check");
//create an array with characters we only accept
var valid = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ];
var bday;
//makes sure ther html runs before jquery is loaded
$(document).ready(function() {
  //attach click listener to the submit button
  $("#submit").click(function() {
    //when clicked, create a variable holding the value
    //of the input text box
    bday = $("#input").val();

    console.log("Birthday: " + bday);

    if (bday.length == 10) {
      console.log("Birthday length is ten characters long.");
      var currentChar;

      console.log("The current character is: " + currentChar);

      var invalid = false;

      for (var charCounter = 0; charCounter < bday.length; charCounter++) {
        currentChar = bday.charAt(charCounter);

        console.log("Current character is: " + currentChar);

        if (2 == charCounter || 5 == charCounter) {
          console.log("Current character is 3rd or 6th, must be a slash.")


          if (currentChar == "/") {
            console.log("This character is a slash.");

            invalid = false;
          } else {
            console.log("This character is not a slash.");
            invalid = true;
            break;
          }

        } else {

          // counter updated to arrayCounter
          for (var arrayCounter = 0; arrayCounter < valid.length ; arrayCounter = arrayCounter + 1) {
            console.log("Comparing " + currentChar + " to " + valid[arrayCounter]);
            if ( valid[arrayCounter] == currentChar) {
              invalid = false;
              break;
            } else {
              invalid = true;
            }
          }

        }

      }

      if (!invalid) {
        $("#results").html(bday + " birthday is valid.");
      } else {
        $("#results").html("birthday is invalid");
      }

    } else {
      $("#results").html("This is not a valid birthday because it's too long.");
    }

  });

});
