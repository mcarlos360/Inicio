var gulp= require('gulp');
var sass= require('gulp-sass');
var rename= require('gulp-rename');
var babelify= require('babelify');
var browserify= require('browserify');
var source= require('vinyl-source-stream');
var watchify= require('watchify');
gulp.task('styles', () => {
	return gulp
		.src('index.scss')
		.pipe(sass())
		.pipe(rename('app.css'))
		.pipe(gulp.dest('public'));
})

gulp.task('assets', () => {
	return gulp
		.src('assets/*')
		.pipe(gulp.dest('public'));
})

function compile(watch){
	var bundle = watchify(browserify('./src/index.js', {debug: true}));
	
	function rebundle(){
		bundle /*        */
		.transform(babelify)
		.bundle()
		.pipe(source('index.js'))
		.pipe(rename('app.js'))
		.pipe(gulp.dest('public'));
	}

	if(watch){
		bundle.on('update', () => {
			console.log("--> Bundling...");
			rebundle();
		})
	}
	rebundle();
}

gulp.task('build', () => {
	return compile();
})

gulp.task('watch', () => {
	return compile(true);
})

gulp.task('default', gulp.parallel('styles','assets','build'));