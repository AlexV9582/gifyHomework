var topics;
var topicsArray = [];
var queryUrl = "https://api.giphy.com/v1/gifs/search?q=undefined&limit=10&rating=g&apikey=dc6zaTOxFJmzC"
// Console.log query results to verify object layout
$.ajax({
		url: queryUrl,
		method: "GET"
	}).done(function(response) {
		console.log(response)
})		
//On click function to create new buttons based on user input
$("#getGifs").on("click", function(){
	topics = $("#description").val().trim();
	topicsArray.push(topics);
	var gifButton = $("<button>").text(topics).attr("value", topics);
	$("#holder").prepend(gifButton);
})
//On click function to generate and prepend gifs based on value of created button
$("button").on("click", function() {
	if (this.value != "default") {
		var gifTopic = $(this).attr("value");
		console.log(gifTopic)
		var queryUrl = "https://api.giphy.com/v1/gifs/search" + "?q=" + gifTopic + "&limit=10" + "&rating=g" + "&apikey=dc6zaTOxFJmzC"
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
				gifDiv.prepend(gifImage)
				gifDiv.prepend(p)
				$("holder").prepend(gifDiv)
			}
		})
	}	
})