/*eslint-env jquery */
var count0 = 0;
var $clickCounter0 = $("#click-counter0");
$("#catpic0").click(function() {
	"use strict";
  count0++;
  $clickCounter0.html("You have clicked this cat " + count0 + " times!");
});

var count1 = 0;
var $clickCounter1 = $("#click-counter1");
$("#catpic1").click(function() {
	"use strict";
  count1++;
  $clickCounter1.html("You have clicked this cat " + count1 + " times!");
});
