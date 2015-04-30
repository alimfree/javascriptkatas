var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var run = require('gulp-run');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var reporters = require('jasmine-reporters');

gulp.task('test', function() {
    gulp.src('spec/**/*.js')
        // .pipe(run('cls'))
        .pipe(jasmine('', { 'verbose': true, notify: true, reporter: new reporters.JUnitXmlReporter()  }))
        .on('error', notify.onError({
            title: "Crap",
            message: "Your tests failed, Ali!",
            icon: __dirname + '/fail.png'
        }))
        .pipe(notify({
            title: "Success",
            message: "All tests have returned green!",
            icon: __dirname + 'sucess.jpg'
        }));
});

gulp.task('watch', function() {
    gulp.watch(['spec/**/*.js', 'src/**/*.js'], ['test']);
});

gulp.task('default', ['test', 'watch']);