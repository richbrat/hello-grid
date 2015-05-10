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
					'css/grid.css': 'scss/grid.scss',
					'css/irrelevant-for-the-grid.css': 'scss/irrelevant-for-the-grid.scss'
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