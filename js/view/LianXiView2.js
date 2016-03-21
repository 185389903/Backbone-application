define(["underscore","backbone","text!template/lianXi1.html"],function(_,Backbone,lianXiHtml){
	var views=Backbone.View.extend({
		tagName:"li",
		template:_.template(lianXiHtml),
		events:{
			"click .toggle":"clicks",
			"click .destroy":"remove"
		},
		initialize:function(){
			this.$el.html(this.template(this.model.toJSON()));
			$("#world-list").append(this.el);
			//console.log(this.model.toJSON());
		},
		clicks:function(){
			this.model.save({done:!this.model.get("done")});
			//保存更新会发送一条PUT请求给后台
			//console.log(this.model);
		},
		remove:function(e){
			console.log(this.model);
			//发送一个删除请求delete
			this.model.destroy({
				success:function(a){
					console.log(a);
				}
			});
			//同时在集合里面删除掉这条数据
			modelsObj.remove(this.model);
			//html的对应这条数据也删除掉
			this.$el.remove();
			
			//console.log(modelsObj);
		}
	});
	return views;
});