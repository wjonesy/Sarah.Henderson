/// <binding BeforeBuild='less' />
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
gulp.task('less', function () {
    return gulp.src('./css/main.less')
    .pipe(plumber())
      .pipe(less({
          paths: [path.join(__dirname, 'less', 'includes')]          
      }))
        
      .pipe(gulp.dest('./css/'));
});
gulp.task('watch', function() {
    gulp.watch('./css/*.less', ['less']);  // Watch all the .less files, then run the less task
});