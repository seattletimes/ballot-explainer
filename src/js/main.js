var paywall = require("./lib/paywall");
setTimeout(() => paywall(12345678), 5000);

require("component-responsive-frame/child");

var current = 0,
	data = require("../../data/ballot-annotations.sheet.json"),
	page_label = document.querySelector("#page-label"),
	annotation_hed = document.querySelector("#annotation-hed"),
	annotation_text = document.querySelector("#annotation-text"),
	prev_button = document.querySelector("#prev-button"),
	next_button = document.querySelector("#next-button"),
	image_container = document.querySelector("#image-container");

var goToAnnotation = function(index) {
	var annotation = data[index];

	if (page_label.textContent !== annotation.page) {
			page_label.textContent = annotation.page;
	}
	annotation_hed.textContent = annotation.hed;
	annotation_text.textContent = annotation.text;

	if (image_container.style["background-image"] != 'url("./assets/' + annotation.bg_image + '")') {
		image_container.style["background-image"] = 'url("./assets/' + annotation.bg_image + '")';
	}
	image_container.style["background-size"] = annotation.bg_size;
	image_container.style["background-position"] = annotation.bg_position;

	if (index === data.length - 1) {
		next_button.classList.remove("active");
		next_button.classList.add("inactive");
	} else {
		next_button.classList.remove("inactive");
		next_button.classList.add("active");
	}

	if (index === 0) {
		prev_button.classList.remove("active");
		prev_button.classList.add("inactive");
	} else {
		prev_button.classList.remove("inactive");
		prev_button.classList.add("active");
	}
}

var nextAnnotation = function() {
	if (current < data.length - 1) {
		current += 1;
		goToAnnotation(current);
	}
}

var previousAnnotation = function() {
	if (current > 0) {
		current -= 1;
		goToAnnotation(current);
	}
}

goToAnnotation(0);

prev_button.addEventListener("click", function() {
	previousAnnotation();
});

next_button.addEventListener("click", function() {
	nextAnnotation();
})
