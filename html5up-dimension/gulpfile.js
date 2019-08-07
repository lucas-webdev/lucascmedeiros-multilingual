const gulp = require('gulp')
const sass = require('gulp-sass')
const watch = require('gulp-watch')
const del = require('del');

gulp.task('styles', () => {
    return gulp.src('./assets/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('clean', () => {
    return del([
        './assets/css/main.css',
    ]);
});

gulp.task('watch', () => {
    gulp.watch('./assets/sass/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});

gulp.task('default', gulp.series(['clean', 'styles']));
