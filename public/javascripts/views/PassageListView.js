var PassageListView = Backbone.View.extend({
	render: function(){
		this.$el.empty();

		var passage = this.collection.models
		var view = new PassageView({model: passage});
		this.$el.append(view.render().$el);

		return this;
	}
})