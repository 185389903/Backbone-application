define(["underscore","backbone","model/touchModel"],function(_,Backbone,touchModel){
	var touchColl=Backbone.Collection.extend({
		model:touchModel,
		page:0,
		total:2,
		url:"./xiala.php?v"+new Date().getTime()+"&page="+this.page+"&total="+this.total
	});
	return new touchColl;
});