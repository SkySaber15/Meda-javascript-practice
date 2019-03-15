"use strict";

$(document).ready(function() {

  $("#img1").click(function() {

    $("#lightbox").css("width", "100%");
    $("#lightbox").css("height", "100%");
    $("#lightbox").css("background-color", "rgba(255, 105, 180, .75)");
    $("#lightbox").css("display", "block");




  });
  $("#close").click(function() {
    console.log("Hello");
    $("#lightbox").css("display", "none");

  });

});
