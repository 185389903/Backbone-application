define(["jq","underscore","backbone","conllection2/conll","view/LianXiView2"],function($,_,Backbone,modelsObj,views){
	var views2=Backbone.View.extend({
		el:$(".box"),
		events:{
			"keypress #valss":"addLi"
		},
		initialize:function(){
			//console.log(modelsObj);
			this.listenTo(modelsObj,"add",this.addOne);//modelsObj是集合类
			// modelsObj是集合
			this.input=this.$("#valss");
			
		},
		addOne:function(obj){
			//console.log(obj);
			//console.log(obj);//查看创建一个集合里的添加内容
			var viewsObj=new views({model:obj});//把每一条请求过来的数据保存到视图的model里面
			//console.log(viewsObj);
			//新建视图views
		},
		addLi:function(e){
			if (e.keyCode != 13) return;
	        if (!this.input.val()) return;
			modelsObj.create({"title":this.input.val()});//创建一个新的模型到集合里，并且自动提交服务器。这里发送了一个POST请求
			
			//集合创建一个值，也是往里面添加值，里面存了个属性值model。这个是默认值是模型里面的值
			//这里没创建一个值都默认追加上model值
			//console.log(modelsObj);
		}
	});
	return new views2;
});