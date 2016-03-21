define(["jq","underscore","backbone","view/touchView2","conllection2/conll3","text!template/xiala.html"],function($,_,Backbone,touchView2,touchColl,xialaHtml){
	var touchView=Backbone.View.extend({
		el:$(document),
		body:$("body"),
		template:_.template(xialaHtml),
		initialize:function(){
			this.listenTo(touchColl,"add",this.addone);
			this.body.append(this.template());
			//alert(this.body.height());
		},
		addone:function(obj){
			//console.log(touchView2);

			touchView2.prototype.v=this;
			var v2=new touchView2({model:obj});
			//console.log(v2);
			//v2.v=this;
			
		},
		options:{
			startY:0,
			moveY:0,
			scrollTop:0,
			domH:0,
			winH:0,
			scrollH:0,
			bol:false,
			bot:0,
			bol2:false,
			seep:500,
			bol3:true,
			moveBol:false,
			seep:0,
			bj:0,
			aa:0
		},
		events:{
			"touchstart html":"startf",
			"touchmove html":"movef",
			"touchend html":"endf"
		},
		startf:function(e){
			var self=this;
			self.options.bj=0;
			$(".scrollTopBox").css("-webkit-transition","none");
			self.options.startY=parseInt(e.originalEvent.changedTouches[0].pageY);
			self.options.scrollTop=$(window).scrollTop();
			self.options.domH=self.$el.height();
			self.options.winH=$(".winH").height();
			self.options.scrollH=self.options.domH-self.options.winH;
			self.options.bot=parseInt($(".scrollTopBox").css("bottom"));
			if(self.options.scrollTop>self.options.scrollH){

				e.preventDefault();
				return false;
			}
			if(self.options.scrollH<=self.options.scrollTop){
				
				self.options.bj=1;
				
			}
			/*console.log(self.options.scrollH);
			console.log(self.options.scrollTop);*/
		},
		movef:function(e){
			var self=this;
			/*if(self.options.bj==0){
				e.preventDefault();
				return false;
			};*/
			
			/*if(!self.options.moveBol){
				e.preventDefault();
				return false;
			}*/
			if(self.options.scrollTop>self.options.scrollH){
				return false;
			}
			self.options.moveY=self.options.startY-e.originalEvent.changedTouches[0].pageY;

			//console.log(self.options.moveY);
			//console.log(self.options.scrollTop+"**self.options.scrollTop");
			//console.log(self.options.scrollH+"**self.options.scrollH");
			if(self.options.moveY>0){
				if(self.options.scrollTop>=self.options.scrollH){
					
					e.preventDefault();
					//return false;
				};
			
			


			
				if(self.options.bol3){
					if(parseInt(self.options.moveY)>=150){
						self.options.moveBol=true;
						$(".scrollTopBox").html("↑放开加载...");
						
						if(self.options.bj==1 && self.options.moveBo){
							e.preventDefault();
							//if(parseInt(self.options.moveY)>=150){
								//alert(1);
								/*self.options.bol3=true;
								console.log("aaaa");
								self.options.bol=false;*/
								//$(".scrollTopBox").show();
							//}
						}	
					}else{
						$(".scrollTopBox").css({"bottom":self.options.bot+self.options.moveY+"px"});
					}	
				}
			}
			
		},
		endf:function(e){
			var self=this;
			self.options.bol3=false;
			//var se=parseInt(new Date().getTime()/1000)-self.options.seep;
			//console.log(se+"::se");
			$(".scrollTopBox").css("-webkit-transition","bottom 0.5s linear");
			self.options.moveY=0;
			self.options.startY=0;
			//self.options.moveBol=false;
			
			if(self.options.bj==1 && self.options.moveBol){
					self.options.bj=0;
					self.options.moveBol=false;

						
							self.touchSuccess();
						
					
			}else{
				$(".scrollTopBox").css("bottom","-100px");
				setTimeout(function(){
					self.options.bol3=true;
				},self.options.seep);
			}
		},
		page:0,
		total:2,
		touchSuccess:function(){
			/*if(touchColl.page!=0){
				
			}*/
			touchColl.url="./xiala.php?v"+new Date().getTime()+"&page="+this.page+"&total="+this.total
			//console.log(touchColl.url);
			this.page+=2;
			touchColl.fetch();
			
			
		}


	});
	return new touchView;
});