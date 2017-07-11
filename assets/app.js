var topics;
var topicsArray = [];
var gifTopic;
var queryUrl = "https://api.giphy.com/v1/gifs/search" + "?q=" + gifTopic + "&?limit=10" + "&?rating=g" + "&apikey=dc6zaTOxFJmzC"

$.ajax({
		url: queryUrl,
		method: "GET"
	}).done(function(response) {
		console.log(response)
})		

$("#getGifs").on("click", function(){
		topics = $("#description").val().trim();
		topicsArray.push(topics);
		var gifButton = $("<button>").text(topics).attr("id", topics)
		$("#holder").prepend(gifButton)
})

$("#" + topics).on("click", function() {
	gifTopic = $(this).id()
	var queryUrl = "https://api.giphy.com/v1/gifs/search" + "?q=" + gifTopic + "&?limit=10" + "&?rating=g" + "&apikey=dc6zaTOxFJmzC"
	$.ajax({
		url: queryUrl,
		method: "GET"
	}).done(function(response) {
		console.log(response)
		for (var i = 0; i < response.data.length; i++) {
			var gifDiv = $("<div>")
			var p = $("<p>").text("Rating: " + response.data[i].rating)
			var gifImage = $("<img>")
			gifImage.attr("src", response.data[i].images.fixed_height.url)
			$("#holder").prepend(gifImage)
			$("#holder").prepend(p)
		}
	})
})