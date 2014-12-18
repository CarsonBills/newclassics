var BiographyView = Backbone.View.extend({
	template: _.template($('#biography-template').html()),
	render: function(){
		this.$el.html(this.template(this.model[0].toJSON()));
		debugger;
		return this;
	}
})