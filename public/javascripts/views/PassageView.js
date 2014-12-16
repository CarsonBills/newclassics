var PassageView = Backbone.View.extend({
	template: _.template($('#passage-template').html()),
	render: function(){
		this.$el.html(this.template(this.model[0].toJSON()));
		return this;
	}
});