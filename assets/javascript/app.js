var animals = ["Dogs", "Cats", "Horses", "Birds"];

function renderButtons () {

$("#buttons-view").empty();

    for (var i = 0; i < animals.length; i++) {
    var a = $("<button>");
    a.addClass("animal");
    a.attr("data-name", animals[i]);
    a.text(animals[i]);

    $("#buttons-view").append(a);
    }
}

$("#add-animal").on("click", function(event) {
    event.preventDefault();

    var animal = $("#animal-input").val().trim();
    animals.push(animal);
    renderButtons();
});

renderButtons();








// for (var i = 0; i < animals.length; i++) {
//     var button = $("<button>").text(animals[i]);
//     button.attr("data-name", animals[i]);
//     button.addClass("animal-button");
//     $("#button-group").append(button);
// }

// $("#add-animal-button").on("click", function(e) {
// 	e.preventDefault();
// 	var alreadyExist = false;
// 	if(topics.indexOf($("#new-animal-input").val()) !== -1) {
// 		alreadyExist = true;
// 	}
// 	if($("#new-animal-input").val() !== "" && alreadyExist === false) {
// 		var newBabe = $("#new-animal-input").val().toLowerCase();
// 		topics.push(newBabe);
// 		var button = $("<button>").text(newBabe);
// 		button.attr("data-name", newBabe);
// 		button.addClass("animal-button");
// 		$("#button-group").append(button);
// 	}
// 	$("#new-animal-input").val("");
// });

// function displayAnimalInfo() {
//     var animal = $(this).attr("data-name");
//     var queryUrl = "https://api.giphy.com/v1/gifs/search?=" + animal + "&api_key=qLmBMR382eCW4VGfOAPkmDMpgRC6R3kk&limit=10&rating";

    
// }