//modules
var file = require('file-system');
var fs = require('fs');
var browsersync = require('browser-sync');
var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var js = require('gulp-');

//paths
var SRC_DIR = './src/';
var DIST_DIR = './dist/';


var paths = {
    sass : {
        entry : SRC_DIR + 'style/*.scss',
        src : SRC_DIR + 'style/**/*.scss',
        dist : DIST_DIR + 'css'
    },
    jade : {
        src : SRC_DIR + 'pages/*.jade',
        dist : DIST_DIR +'pages'
    },
    img : {
        src : SRC_DIR + 'img/*.*',
        dist : DIST_DIR +'img'
    },
    fonts : {
        src : SRC_DIR + 'fonts/*.*',
        dist : DIST_DIR +'fonts'
    }

}
//task SASS
gulp.task('sass', function () {
    return gulp.src(paths.sass.entry)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.sass.dist))
    
})
gulp.task('js', function () {
    return gulp.src(paths.sass.entry)
        .pipe(js().on('error', js.logError))
        .pipe(gulp.dest(paths.sass.dist))

})
// task PUG(JADE)
gulp.task('jade', function() {
    var YOUR_LOCALS = {};

    gulp.src(paths.jade.src)
        .pipe(jade({
            locals: YOUR_LOCALS,
            pretty : '  ',
        }))
        .pipe(gulp.dest(paths.jade.dist))
});

gulp.task('copy', function (callback) {
    // Переносим шрифты
    gulp.src(path.sourse.folder + '/' + path.sourse.fonts + '/**/*')
        .pipe(gulp.dest(path.build.folder + '/' + path.build.fonts));

    // Переносим картинки

    gulp.src(path.sourse.folder + '/' + path.sourse.img + '/**/*')
        .pipe(gulp.dest(path.build.folder + "/" + path.build.img));

    callback();

});

gulp.task('watch', function () {
    gulp.watch(paths.jade.src, ['jade'])
    gulp.watch(paths.sass.src, ['sass'])

});

gulp.task('default', ['jade', 'sass', 'watch'])