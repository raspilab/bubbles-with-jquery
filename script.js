$(document).ready(function() {

  function bubblesEverywhere(bubbleCount) {
    var i;
    for (i = 1; i <= bubbleCount; i++) {
      var bubbleID = "bubble" + i;
      $(".bubble-header").css({
        position: "relative",
        padding: "49vh",
        overflow: "hidden",
      }).append("<div class='bubble' id='" + bubbleID + "'></div>");
    }
  }

  bubblesEverywhere(50);

  $(".bubble").each(function bubbleAnimate() {

    var eachBubble = $(this);

    var bottomPosition = Math.floor(Math.random() * (80 - 30) + 30);
    var leftPosition = Math.floor(Math.random() * (95 - 5) + 5);
    var l = Math.floor(Math.random() * (15 - 1) + 1);

    var colorVal = Math.floor(Math.random() * (4 - 1) + 1);
    var color;
    switch (colorVal) {
      case 1:
        color = "#009fc3";
        break;
      case 2:
        color = "#ffc0cb";
        break;
      case 3:
        color = "#a0cc00";
        break
      default:
        color = "#009fc3";
    }

    var int = Math.floor(Math.random() * (10 - 5) + 5);

    eachBubble.css({
      position: "absolute",
      background: "white",
      border: "solid 6px",
      borderRadius: "50%",
      borderColor: color,
      left: leftPosition + "vw",
      width: 0,
      height: 0,
      opacity: 0.5,
      bottom: -20,
    });

    eachBubble.velocity({
      width: l + "vw",
      height: l + "vw",
      opacity: 0,
      bottom: bottomPosition + "%",
      left: (leftPosition - (l / 4)) + "vw",
    }, (int * 1000), bubbleAnimate);

  });

});
