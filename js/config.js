requirejs.config({
	deps:["app"],
	baseUrl:"./js/",
	urlArgs:"t="+new Date().getTime(),
	paths:{
		"dropDownUpload":"app/dropDownUpload",
		"jq":"lib/jquery-1.10.2.min",
		"backbone":"lib/backbone-min",
		"underscore":"lib/underscore-min",
		"rotate":"lib/jQueryRotate.2.2"

	},
	shim:{
		"jq":{
			exports:"$"
		},
		"underscore":{
			exports:"_"
		},
		"backbone":{
			deps:["underscore"],
			exports:"Backbone"
		},
		"rotate":{
			deps:['jq']
		}
	}
});