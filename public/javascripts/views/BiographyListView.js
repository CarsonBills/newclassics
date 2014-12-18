var BiographyListView = Backbone.View.extend({
	render: function(){
		this.$el.empty();

		var biography = this.collection.models
		var bio_view = new BiographyView({model: biography});
		this.$el.append(bio_view.render().$el);

		return this;
	}
})