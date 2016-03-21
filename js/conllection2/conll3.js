define(["underscore","backbone","model/touchModel"],function(_,Backbone,touchModel){
	var touchColl=Backbone.Collection.extend({
		model:touchModel,
		page:0,
		total:2
	});
	return new touchColl;
});