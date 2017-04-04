document.addEventListener("DOMContentLoaded", function () {	
	//console.log("nowe");	
	var quotes = firebase.database().ref("/quotes");
    quotes.once("value").then(function(data) {
        quotes = data.val();
		//console.log(quotes);
		var askButton = document.querySelectorAll("button");
		function showQuotes(index){
			askButton[index].addEventListener("click", function(event){
				var myQuotes = quotes[index];
				var quotesLength = myQuotes.length;
				var randomIndex =  Math.floor(Math.random() * quotesLength);
				var paragraph = this.nextElementSibling;
				paragraph.innerText = myQuotes[randomIndex];
			});
		}
		showQuotes(0);
		showQuotes(1);
		showQuotes(2);


	});
	
	

	
});