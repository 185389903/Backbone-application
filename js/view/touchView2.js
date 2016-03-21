define(["jq","underscore","backbone","conllection2/conll3","text!template/xiala2.html","view/touchView"],function($,_,Backbone,touchColl,html,views){
	var touchView2=Backbone.View.extend({
		el:$("body"),
		body:$("body"),
		template:_.template(html),
		initialize:function(){
			//console.log(this);
			/*this.views=views;*/
			this.$el.append(this.template(this.model.toJSON()));
			this.appendHtml(this.v);
		},
		appendHtml:function(self){
			$(".scrollTopBox").html("↓加载成功...");
			setTimeout(function(){
				
				self.options.bol3=true;
				
				$(".scrollTopBox").html("↓下拉加载...");
			},2000);
			
			
			setTimeout(function(){
				$(".scrollTopBox").css("bottom","-100px");
			},1000);
		}
	});
	return touchView2;
});