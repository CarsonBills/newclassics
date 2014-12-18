console.log("scripts loaded!")

array_of_authors = [
"melville", "dickens",
 "twain", "shakespeare", 
 "homer", "austen", 
 "wallace", "joyce",
 "hemingway", "fitzgerald",
 ]

function fetchPassage() {
			console.log(":)")
			author = $("select.write").val()
				|| randomAuthor(array_of_authors);
			passages.fetch({
				data: $.param({ 
				author: author, 
				word: 'the'
				}), 
			success: function(){
				$("div.paper").fadeIn(200);
				passageListView.render();
				$("h3.loading").hide();

			}
	});
}


function submitAuthor(){
	$("input:submit.write").keydown(function(e){
		if(e.keyCode == 13){
			$('input:submit.write').trigger('click');
		}
	});
	$("input:submit.write").on("click", function(e){
		e.preventDefault();
		fetchPassage();
	$("input:submit.write").hide();
	});

}

function randomAuthor(array){
	 return array[Math.floor ( Math.random() * array.length )]
}

function submitAnswer(){
	$("input:submit.guess").keydown(function(e){
			if(e.keyCode == 13){
				$('input:submit.guess').trigger('click');
			}
		}); 	
	$("input:submit.guess").on("click", function(e){
		e.preventDefault();
		var answer = $("select.guess").val()
		if (answer == author) {
			correctAnswer();
			} else {
			incorrectAnswer();
		}
	});	
}

function correctAnswer(){
	$("h3.result").html("CORRECT!<p> ♪ &nbsp; <(^_^<) &nbsp; ♪ ♪ &nbsp;(>^_^)> &nbsp;♪</p>")
	fetchBiography();

}

function incorrectAnswer(){
	$("h3.result").html("WRONG!<p>(╯°□°)╯︵ ┻━┻</p>")
	fetchBiography();
}

function fetchBiography(){
	biographies.fetch({
		data: $.param({
			author: author
		}),
		success: function(){
			biographyListView.render();
			$("div.passage").hide();
			$("input:submit.game").show();
			$("input:submit.guess").hide();
		}
	});
}

