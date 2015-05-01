var gulp = require('gulp');
var karma = require('karma').server; 

gulp.task('test', function(done) {
    gulp.src('spec/**/*.js')
        karma.start({
            configFile: __dirname + '/karma.conf.js',
            singleRun: true
        }, done);
});

gulp.task('watch', function() {
    gulp.watch(['spec/**/*.js', 'src/**/*.js'], ['test']);
});

gulp.task('default', ['test', 'watch']);