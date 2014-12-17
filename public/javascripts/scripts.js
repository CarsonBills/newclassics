console.log("scripts loaded!")

array_of_authors = [
"Melville", "Dickens",
 "twain", "Shakespeare", 
 "Homer", "Austen", 
 "Wallace", "Joyce",
 "Hemingway", "Fitzgerald",
 ]

function fetchPassage() {
			console.log(":)")
			author = $("input.author").val() 
				|| randomAuthor(array_of_authors);
			passages.fetch({
				data: $.param({ 
				author: author, 
				word: 'the'
				}), 
			success: function(){
				passageListView.render();
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
		var answer = $("input:text.guess").val()
		if (answer == author) {
			correctAnswer();
			} else {
			incorrectAnswer();
		}
	});	
}

function correctAnswer(){
	console.log("RIGHT!")
}

function incorrectAnswer(){
	console.log("WRONG!")
}


