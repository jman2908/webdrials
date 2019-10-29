var topics = ["dog", "cat", "bird", "horse", "bear", "snake", "hamster"];

for(var i = 0; i < topics.length; i++) {
	var button = $("<button>").text(topics[i]);
	button.attr("data-animal", topics[i]);
	button.addClass("animal-button");
	$("#button-group").append(button);
}

$("#add-animal-button").on("click", function(e) {
	e.preventDefault();
	var alreadyExist = false;
	if(topics.indexOf($("#new-animal-input").val()) !== -1) {
		alreadyExist = true;
	}
	if($("#new-animal-input").val() !== "" && alreadyExist === false) {
		var newAnimal = $("#new-animal-input").val().toLowerCase();
		topics.push(newAnimal);
		var button = $("<button>").text(newAnimal);
		button.attr("data-animal", newAnimal);
		button.addClass("animal-button");
		$("#button-group").append(button);
	}
	$("#new-animal-input").val("");
});

$(document).on("click", ".animal-button", function() {
	var animal = $(this).attr("data-animal");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
    	url: queryURL,
    	method: "GET"
    }).done(function(response) {
    	var results = response.data;

		var resultsContainerSection = $("<section class='results-container'>");

    	for(var i = 0; i < results.length; i++) {
    		var singleResultDiv = $("<div class='result-container'>");
    		
    		var rating = results[i].rating;

    		var p = $("<p>").text("Rating: " + rating);

    		var animalImg = $("<img class='result'>");
            
            animalImg.attr("src", results[i].images.fixed_height_still.url);
    		animalImg.attr("data-state", "still");
    		animalImg.attr("data-still", results[i].images.fixed_height_still.url);
    		animalImg.attr("data-animate", results[i].images.fixed_height.url);

    		singleResultDiv.prepend(animalImg);
    		singleResultDiv.prepend(p);

    		resultsContainerSection.prepend(singleResultDiv);
    	}

    	$("#animals-group").prepend(resultsContainerSection);
    });
});

$(document).on("click", ".result", function() {
	var state = $(this).attr("data-state");

	if(state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } 
      
      else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});