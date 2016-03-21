{
	appDir:"../",//项目根目录
	baseUrl:"./js/",//程序制定目录，就是制定要打包或者配置文件的目录开始
	dir:"../../dir2",//配置打包输出目录
	optimize: "uglify",//代码打包格式配置
	/*
		代码优化方式。可设置的值：
		"uglify：使用 UglifyJS 压缩代码，默认值；
		"uglify2"：使用 2.1.2+ 版本进行压缩；
		"closure"： 使用 Google's Closure Compiler 进行压缩合并，需要 Java 环境；
		"closure.keepLines"：使用 Closure Compiler 进行压缩合并并保留换行；
		"none"：不做压缩合并；
	*/
	keepBuildDir: true,
	//optimizeCss: "standard.keepLines",
	//mainConfigFile: "config.js",//加载模块配置文件
	removeCombined: true,
	modules:[
		
		{
			name:"app"
		},
		{
			name:"app2"
		}
	],
	fileExclusionRegExp: /^\./,/*要排除的文件的正则匹配的表达式*/
	deps:["app"],
	//urlArgs:"t="+new Date().getTime(),
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
}
/*
optimizeCss

　　CSS 代码优化方式，可选的值有：

"standard"：标准的压缩方式；
"standard.keepLines"：保留换行；
"standard.keepComments"：保留注释；
"standard.keepComments.keepLines"：保留换行；
"none"：不压缩；
　　mainConfigFile

　　如果不想重复定义的话，可以使用这个参数配置 RequireJS 的配置文件路径。

　　removeCombined

　　删除之前压缩合并的文件，默认值 false。

　　fileExclusionRegExp

　　要排除的文件的正则匹配的表达式。

　　modules

　　定义要被优化的模块数组。每一项是模块优化的配置，常用的几个参数如下：

　　　　name：模块名；

　　　　create：如果不存在，是否创建。默认 false；

　　　　include：额外引入的模块，和 name 定义的模块一起压缩合并；

　　　　exclude：要排除的模块。有些模块有公共的依赖模块，在合并的时候每个都会压缩进去，例如一些基础库。使用 exclude 就可以把这些模块在压缩在一个更早之前加载的模块中，其它模块不用重复引入。*/