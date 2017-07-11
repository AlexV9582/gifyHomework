var topics;
var topicsArray = [];
var queryUrl = "https://api.giphy.com/v1/gifs/search" + "?q=" + topics + "&?limit=10" + "&?rating=g" + "&apikey=dc6zaTOxFJmzC"

$.ajax({
	url: queryUrl,
	method: "GET"
}).done(function(response) {
	console.log(response)
	$("#getGifs").on("click", function(){
		topics = $("#description").val().trim();
		topicsArray.push(topics);
			var gifButton = $("<button>").text(topics)
			$("#holder").prepend(gifButton)
	})

})