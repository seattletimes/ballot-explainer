var paywall = require("./lib/paywall");
setTimeout(() => paywall(12345678), 5000);

require("component-responsive-frame/child");

var current = 0,
	data = require("../../data/ballot-annotations.sheet.json"),
	annotation_hed = document.querySelector("#annotation-hed"),
	annotation_text = document.querySelector("#annotation-text"),
	prev_button = document.querySelector("#prev-button"),
	next_button = document.querySelector("#next-button"),
	image_container = document.querySelector("#image-container");

var goToAnnotation = function(index) {
	var annotation = data[index];

	annotation_hed.textContent = annotation.hed;
	annotation_text.textContent = annotation.text;

	image_container.style["background-size"] = annotation.bg_size;
	image_container.style["background-position"] = annotation.bg_position;
}

var nextAnnotation = function() {
	current += 1;
	goToAnnotation(current);
}

var previousAnnotation = function() {
	current -= 1;
	goToAnnotation(current);
}

goToAnnotation(0);

prev_button.addEventListener("click", function() {
	previousAnnotation();
});

next_button.addEventListener("click", function() {
	nextAnnotation();
})
