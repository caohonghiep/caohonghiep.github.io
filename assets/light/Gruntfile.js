module.exports = function(grunt) {
    grunt.initConfig({
		sass: {
			options: {
                includePaths: ['node_modules/bootstrap-sass/assets/stylesheets']
            },
            dist: {
				options: {
					outputStyle: 'compressed'
				},
                files: [{
                    'assets/css/main.css': 'assets/scss/main.scss', 	                        /* 'All main SCSS' */
                    'assets/css/color_skins.css': 'assets/scss/color_skins.scss', 				/* 'All Color Option' */                    
                    'assets/css/blog.css': 'assets/scss/pages/blog.scss', 				        /* 'Blog App SCSS to CSS' */
                    'assets/css/inbox.css': 'assets/scss/pages/inbox.scss', 				    /* 'inbox App SCSS to CSS' */
				}]
            }
        },
        uglify: {
          my_target: {
            files: {
                'assets/bundles/libscripts.bundle.js': ['../assets/vendor/jquery/jquery-3.3.1.min.js','../assets/vendor/bootstrap/js/popper.min.js','../assets/vendor/bootstrap/js/bootstrap.js'], /* main js*/
                'assets/bundles/vendorscripts.bundle.js': ['../assets/vendor/metisMenu/metisMenu.js','../assets/vendor/jquery-slimscroll/jquery.slimscroll.min.js','../assets/vendor/bootstrap-progressbar/js/bootstrap-progressbar.min.js','../assets/vendor/jquery-sparkline/js/jquery.sparkline.min.js','../assets/vendor/waitme/waitMe.js'], /* coman js*/
                
                'assets/bundles/mainscripts.bundle.js':['assets/js/common.js'], /*coman js*/

                'assets/bundles/c3.bundle.js':['../assets/vendor/charts-c3/js/c3.min.js', '../assets/vendor/charts-c3/js/d3.v3.min.js'],
                'assets/bundles/morrisscripts.bundle.js': ['../assets/vendor/raphael/raphael.min.js','../assets/vendor/morrisjs/morris.js'], /* Morris Plugin Js */
                'assets/bundles/knob.bundle.js': ['../assets/vendor/jquery-knob/jquery.knob.min.js'], /* knob js*/
                'assets/bundles/chartist.bundle.js':['../assets/vendor/chartist/js/chartist.min.js','../assets/vendor/chartist-plugin-tooltip/chartist-plugin-tooltip.min.js','../assets/vendor/chartist-plugin-axistitle/chartist-plugin-axistitle.min.js','../assets/vendor/chartist-plugin-legend-latest/chartist-plugin-legend.js','../assets/vendor/chartist/Chart.bundle.js'], /*chartist js*/
                'assets/bundles/easypiechart.bundle.js': ['../assets/vendor/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js','../assets/vendor/jquery.easy-pie-chart/easy-pie-chart.init.js'],
                'assets/bundles/flotscripts.bundle.js': ['../assets/vendor/flot-charts/jquery.flot.js','../assets/vendor/flot-charts/jquery.flot.resize.js','../assets/vendor/flot-charts/jquery.flot.pie.js','../assets/vendor/flot-charts/jquery.flot.categories.js','../assets/vendor/flot-charts/jquery.flot.time.js'], /* Flot Chart js*/
                
                'assets/bundles/fullcalendarscripts.bundle.js': ['../assets/vendor/fullcalendar/moment.min.js'],   /* calender page js */
                'assets/bundles/datatablescripts.bundle.js': ['../assets/vendor/jquery-datatable/jquery.dataTables.min.js','../assets/vendor/jquery-datatable/dataTables.bootstrap4.min.js'], /* Jquery DataTable Plugin Js  */
                'assets/bundles/jvectormap.bundle.js': ['../assets/vendor/jvectormap/jquery-jvectormap-2.0.3.min.js','../assets/vendor/jvectormap/jquery-jvectormap-world-mill-en.js'], /* ChartJs js*/
                }
            }
        }                
    });
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask("buildcss", ["sass"]);	
    grunt.registerTask("buildjs", ["uglify"]);
};
