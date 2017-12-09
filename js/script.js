var formButton = document.querySelector(".button-form");
var searchForm = document.querySelector(".search-tours-form");

formButton.addEventListener("click", function(evt) {
	evt.preventDefault();
	searchForm.classList.toggle("form-close");
});

