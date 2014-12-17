array_of_authors = [
"melville", "dickens",
 "twain", "shakespeare", 
 "homer", "austen"
 ]

function fetchPassage() {
			console.log(":)")
			var author = $("input.author").val() 
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
			$('input[type=submit]').trigger('click');
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