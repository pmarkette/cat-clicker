/*eslint-env jquery */
var names = ["Chester", "Tony"];

var $catName0 = $("#catName0");
$catName0.html(names[0]);
var count0 = 0;
var $clickCounter0 = $("#click-counter0");
$("#catpic0").click(function() {
	"use strict";
  count0++;
  $clickCounter0.html("You have clicked " + names[0] + " " + count0 + " times!");
});

var $catName1 = $("#catName1");
$catName1.html(names[1]);
var count1 = 0;
var $clickCounter1 = $("#click-counter1");
$("#catpic1").click(function() {
	"use strict";
  count1++;
  $clickCounter1.html("You have clicked " + names[1] + " " + count1 + " times!");
});


