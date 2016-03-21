define(["underscore","backbone"],function(_,Backbone){
	// 定义模型类
	var Book = Backbone.Model.extend({
	    defaults: {
	        name:'name',
	        title: 0,
	        done:false
	    },
	    toggle:function(){
	    	this.save();
	    }
	});
	return Book;
});