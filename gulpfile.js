//modules
var file = require('file-system');
var fs = require('fs');

var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');

//paths
var SRC_DIR = './src/';
var DIST_DIR = './dist/';


var paths = {
    sass : {
        entry : SRC_DIR + 'styles/main.scss',
        src : SRC_DIR + 'style/**/*.scss',
        dist : DIST_DIR + 'css'
    },
    jade : {
        src : SRC_DIR + 'pages/*.jade',
        dist : DIST_DIR +'pages'
    }
}
//task SASS
gulp.task('sass', function () {
    return gulp.src(paths.sass.entry)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.sass.dist))
    
})
// task PUG(JADE)
gulp.task('jade', function() {
    var YOUR_LOCALS = './package.json';

    gulp.src(paths.jade.src)
        .pipe(jade({
            locals: JSON.parse(fs.readFileSync(YOUR_LOCALS, 'utf-8')),
            pretty : '  ',
        }))
        .pipe(gulp.dest(paths.jade.dist))
});

gulp.task('watch', function () {
    gulp.watch(paths.jade.src, ['jade'])
    gulp.watch(paths.sass.src, ['sass'])

});

gulp.task('default', ['jade', 'sass', 'watch'])