/*eslint-env jquery */
var count = 0;
var $clickCounter = $("#click-counter");
$("#catpic").click(function() {
	"use strict";
  count++;
  $clickCounter.html("You have clicked this cat " + count + " times!");
});
