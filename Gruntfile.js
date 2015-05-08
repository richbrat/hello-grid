'use strict';

module.exports = function( grunt ) {
	grunt.initConfig({
		clean: {
			dist: [
				'css/*.css',
				'css/*.css.map'
			]
		},
		watch: {
			css: {
				files: [ 'scss/*' ],
				tasks: [ 'clean', 'sass' ],
				options: {
					spawn: false
				}
			}
		},
		sass: {
			dist: {
				files: {
					'css/style.css': 'scss/style.scss'
				}
			}
		}
	});

	// Load tasks
	require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

	// Register tasks
	grunt.registerTask( 'default', [
		'clean',
		'sass'
	] );
};