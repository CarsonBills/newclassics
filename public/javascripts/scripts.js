function fetchPassage() {
			console.log(":)")
			passages.fetch({
				data: $.param({ 
				author: 'austen', 
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
