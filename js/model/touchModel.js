define(["underscore","backbone"],function(_,Backbone){
	var touchModel=Backbone.Model.extend({
		defaults:{
			text:"<p>下拉加载数据成功</p>"
		}
	});
	return touchModel;
});