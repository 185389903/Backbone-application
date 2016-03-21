define(["underscore","backbone","model/LianXiModel"],function(_,Backbone,Book){
	var models=Backbone.Collection.extend({
		model:Book,//这里添加模型类的原因是想每个集合都有默认的name  title  done这三个属性
		url:"./a.php?v"+new Date().getTime()
	});
	return new models;
});