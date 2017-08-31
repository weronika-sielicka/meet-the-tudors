var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var minify= require('gulp-minify');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');

/**
 * Kompilacja SASS -> css
 */

gulp.task('sass', function() {
  return gulp.src('scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: ['last 4 versions']
    }))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'));
});

/**
  * Optymalizacja obrazków
*/
gulp.task('image', function(){
  return gulp.src('images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'));
});

/**
 * Obserwator plików
 */

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('images/*', ['image']);
  gulp.watch('js/*.js', ['js']);
});
