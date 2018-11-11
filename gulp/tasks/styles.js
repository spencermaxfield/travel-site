var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssvars = require('postcss-simple-vars');
var nestedcss = require('postcss-nested');
var cssImport = require('postcss-import');
var autoprefixer = require('autoprefixer');
var mixins = require('postcss-mixins');

gulp.task('styles', () => {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([
			cssImport,
			mixins,
			cssvars,
			nestedcss,
			autoprefixer
		]))
		.on('error', function(error) {
			console.log(error.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles'));
});