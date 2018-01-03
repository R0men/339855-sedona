var formButton = document.querySelector(".button-form");
var searchForm = document.querySelector(".search-tours-form");
var inputArrival = searchForm.querySelector("[name=arrival]");
var inputDeparture = searchForm.querySelector("[name=departure]");
var inputAdults = searchForm.querySelector("[name=adults]");
var inputChildren = searchForm.querySelector("[name=children]");

formButton.addEventListener("click", function(evt) {
	evt.preventDefault();
	searchForm.classList.toggle("form-close");
	if (!searchForm.classList.contains("form-close")) {
		searchForm.classList.add("form-bounce");
		inputArrival.focus();
	};
});

searchForm.addEventListener("submit", function(evt) {
 	if (!inputArrival.value || !inputDeparture.value || !inputAdults.value || !inputChildren.value) {
 		evt.preventDefault();
 		searchForm.classList.remove("form-error");
		searchForm.offsetWidth = searchForm.offsetWidth;
 		searchForm.classList.add("form-error");
 	}
 });




