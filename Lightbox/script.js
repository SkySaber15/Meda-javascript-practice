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
    var imageId = "image" + i;

    $("body").append("<img id='" + imageId + "' class='gallery' src='imagies/" + currentImage + "' alt='Corgi-image' />");
    //$("body").append(`<img id='${imageId}' class='gallery' src='imagies/${currentImage}' alt='Corgi-image' />`);


    $("#" + imageId).click(function() {

      $("body").append(`<div id='lightbox'></div>`)
      $("#lightbox").css({
        "position": "fixed",
        "top": "0",
        "left": "0",
        "text-align": "center",
        "width": "100%",
        "height": "100%",
        "background-color": "rgba(0, 0, 0, .75)",
        "display": "block",
      })

      $("#lightbox").append(" src='imagies/" + currentImage + "' alt='Corgi-image' />")

      $("#lightbox").click(function() {
        $("#lightbox").remove();
      })
      console.log('Clicked' + i);
    });

  }

  $(".gallery").css("width", "200px");
  $(".gallery").css("margin-height", "10px");
});
