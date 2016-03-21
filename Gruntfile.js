module.exports=function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON("package.json"),
		html_minify: {
		    options: {
		    	charset:'gbk'
		    },
		    dist:{
			    files: {
			      'index2.html': ['index.html'],
			    }
		    }
		}
	});
	grunt.loadNpmTasks("grunt-html-minify");
	//grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.registerTask("default",['html_minify']);
}
