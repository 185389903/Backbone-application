define(["jq","underscore","backbone","model/touchModel"],function($,_,Backbone,touchModel){
	var touchColl=Backbone.Collection.extend({
		model:touchModel,
		url:"./xiala.php?v"+new Date().getTime()
	});
	return new touchColl;
});