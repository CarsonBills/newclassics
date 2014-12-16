var PassageList = Backbone.Collection.extend({
	url: "/api/write", 
	model: Passage,
});

// PassageList.fetch({data: $.param({ author: 'austen', word: 'the'}) });