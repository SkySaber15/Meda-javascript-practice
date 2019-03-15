$("#ball").css("background-color", "turquoise");

$("#ball").css("height", "100px");

$("#ball").css("text-align", "center");

$("#ball").css("border-radius", "50px");

$("#ball").css("border", "5px solid black");

$("#ball").css("width", "100px");



$("#ball").hover(function() {
  $("#ball").css("cursor", "pointer");
  $("#ball").css("background-color", "purple");

}, function() {
  $("#ball").css("background-color", "turquoise");
});

$("button").css("color", "black");
$("button").css("font-size", "16px");
$("button").css("line-height", "16px");
$("button").css("padding", "8px");
$("button").css("box-shadow", "rgb(0,0,0) 5px 5px 15px 5px");
$("button").css("border", "2px solid rgb(28,110,164)");
$("button").css("width", "100px");
$("button").css("background-color", "white");

$("button").hover(function() {
  $("button").css("cursor", "pointer")
  $("button").css("background-color", "turquoise")
}, function() {
  $("button").css("background-color", "white")
});

var left = $("#left");

var right = $("#right");

var up = $("#up");

var down = $("#down");


right.click(function() {
  console.log("The ball was moved to the right.");
  $("#ball").css("margin-left", "+=100px");
});

left.click(function() {
  console.log("The ball was moved to the left.");
  $("#ball").css("margin-left", "-=100px");
});

up.click(function() {
  console.log("The ball was moved upwards.");
  $("#ball").css("margin-top", "-=100px");
});

down.click(function() {
  console.log("The ball was moved downwards.");
  $("#ball").css("margin-top", "+=100px");
});


$(document).keydown(function(eventdata) {

  event.preventDefault();

  console.log(eventdata.keyCode);

  var ball = $("#ball");

  if (eventdata.keyCode == 37) {
    ball.css("margin-left", "-=100px");

  } else if (eventdata.keyCode == 39) {
    ball.css("margin-left", "+=100px");

  } else if (eventdata.keyCode == 38) {
    ball.css("margin-top", "-=100px");

  } else if (eventdata.keyCode == 40) {
    ball.css("margin-top", "+=100px");
  }
});
