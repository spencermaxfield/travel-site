var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');

gulp.task('createSprite', function() {
	return gulp.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgSprite({
			mode: {
				css: {
					render: {
						css: {
							template: './gulp/templates/sprite.css'
						}
					}
				}
			}
		}))
		.pipe(gulp.dest('./app/temp/sprite'));
});