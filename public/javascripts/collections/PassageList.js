var PassageList = Backbone.Collection.extend({
	url: '/api/write',
	model: Passage
});