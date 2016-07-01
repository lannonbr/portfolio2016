var gulp = require('gulp'),
	sass = require('gulp-sass'),
	clean = require('gulp-clean'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename');

gulp.task('sass', () => {
	return gulp.src('scss/*.scss')
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(gulp.dest('./css'))
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./css'));
})

gulp.task('prod', ['clean'], () => {
	gulp.src(["*.html"]).pipe(gulp.dest("./dist/"));
	gulp.src(["css/*"]).pipe(gulp.dest("./dist/css/"));
	gulp.src(["images/*"]).pipe(gulp.dest("./dist/images/"));
	gulp.src(["js/*"]).pipe(gulp.dest("./dist/js/"));
});

gulp.task('clean', () => {
	return gulp.src('dist/*').pipe(clean());
})

gulp.task('build', ['sass', 'prod'], () => {
	console.log('Building files...');
})

gulp.task('watch', () => {
	gulp.watch(['./scss/*.scss', '.scss/**/*.scss'], ['sass']);
});

gulp.task('default', ['watch']);
