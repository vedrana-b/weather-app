const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
/*
  --TOP LEVEL FUNCTIONS
 gulp.tasks - Define tasks
 gulp.src - Point to files to use
 gulp.dest - Point to the folder to output,
 gulp.watch - Watch files and folders for changes

 */
//Copy All Html files
gulp.task('copyHtml', function () {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

//Compile Sass
gulp.task('sass', function () {
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
});

//Minify Js
gulp.task('uglify', function () {
    gulp.src('src/jquery/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/jquery'));
});

gulp.task('default', ['copyHtml', 'sass', 'uglify']);

gulp.task('watch', function () {
    gulp.watch('src/*.html', ['copyHtml']);
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/jquery/*.js', ['uglify']);
});
//calling watch task
gulp.task('default', ['watch'], function () {
    gulp.start();
});