var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

// Compile SCSS
gulp.task('css:compile', function() {
	return gulp
		.src('app/scss/**/*.scss')
		.pipe(
			sass
				.sync({
					outputStyle: 'expanded'
				})
				.on('error', sass.logError)
		)
		.pipe(
			autoprefixer({
				browsers: [ 'last 2 versions' ],
				cascade: false
			})
		)
		.pipe(gulp.dest('app/css'));
});

// Minify CSS
gulp.task('css:minify', [ 'css:compile' ], function() {
	return gulp
		.src([ 'app/css/*.css' ])
		.pipe(cleanCSS())
		.pipe(
			rename({
				suffix: '.min'
			})
		)
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());
});

gulp.task('css', ['css:minify']);

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function() {

  // Bootstrap
  gulp.src([
      './node_modules/bootstrap/dist/**/*',
      './node_modules/bootstrap/dist/css/bootstrap-grid*',
      './node_modules/bootstrap/dist/css/bootstrap-reboot*'
    ])
    .pipe(gulp.dest('app/vendor/bootstrap'))

  // Font Awesome
  gulp.src([
      './node_modules/@fortawesome/**/*',
    ])
    .pipe(gulp.dest('app/vendor'))

  // jQuery
  gulp.src([
      './node_modules/jquery/dist/*',
      './node_modules/jquery/dist/core.js'
    ])
    .pipe(gulp.dest('app/vendor/jquery'))

  // jQuery Easing
  gulp.src([
      './node_modules/jquery.easing/*.js'
    ])
    .pipe(gulp.dest('app/vendor/jquery-easing'))

});

gulp.task('copyAll', function() {
	gulp.src([ 'app/**/*', 'app/**/**/*' ]).pipe(gulp.dest('src/'));
});

gulp.task('default', [ 'css', 'copyAll', 'serve' ]);

// Configure the browserSync task
gulp.task('serve', ['css'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", ['css']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});
