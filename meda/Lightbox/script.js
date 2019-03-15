"use strict";
var imagies = ["Corgi.jpeg", "Corgi2.jpeg", "Corgi3.jpeg", "Corgi4.jpeg"];


$(document).ready(function() {
  //
  // $("#img1").click(function() {
  //
  //   $("#lightbox").css("width", "100%");
  //   $("#lightbox").css("height", "100%");
  //   $("#lightbox").css("background-color", "rgba(255, 105, 180, .75)");
  //   $("#lightbox").css("display", "block");
  //
  //
  // });
  // $("#close").click(function() {
  //   $("#lightbox").css("display", "none")
  // });

  for (let i = 0; i < imagies.length; i++) {
    var currentImage = imagies[i];


    $("body").append("<img id='image" + i + "' class='gallery' src='imagies/" + currentImage + "' alt='Corgi-image' />");

    $("#image" + i).click(function() {
      console.log('Clicked' + i);
    });

  }


});
