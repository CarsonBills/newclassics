var BiographyList = Backbone.Collection.extend({
	url: "/api/bio",
	model: Biography,
});