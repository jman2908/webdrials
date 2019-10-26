var animals = ["Dogs", "Cats", "Horses", "Birds"];

function displayAnimalInfo() {
    var animal = $(this).attr("data-name");
    var queryUrl = "https://api.giphy.com/v1/gifs/search?=" + animal + "&api_key=qLmBMR382eCW4VGfOAPkmDMpgRC6R3kk&limit=10&rating";

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response) {
        var results = response.data;
        console.log(response);
        for (var i = 0; i < results.length; i++) {

        }
    })
}