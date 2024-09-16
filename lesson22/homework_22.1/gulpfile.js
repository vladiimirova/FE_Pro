const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const fileInclude = require('gulp-file-include');
const concat = require('gulp-concat');
const terser = require('gulp-terser'); // Используем gulp-terser вместо gulp-uglify

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "dist",
            routes: {
                "/node_modules": "node_modules"  // Добавьте эту строку
            }
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});


gulp.task('styles', function() {
    return gulp.src("src/scss/**/*.+(scss|sass)")
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename({ suffix: '.min', prefix: '' }))
        .pipe(autoprefixer())
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('html', function() {
    return gulp.src("src/html/index.html")
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist/"));
});

gulp.task('scripts', function() {
    return gulp.src("src/js/**/*.js")
        .pipe(concat('index.js'))
        .pipe(terser())
        .pipe(gulp.dest("dist/js"));
});

gulp.task('images', function() {
    return gulp.src("src/img/*.jpg")
        .pipe(gulp.dest("dist/img"));
});

gulp.task('watch', function() {
    gulp.watch("src/scss/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/html/**/*.html").on('change', gulp.parallel('html'));
    gulp.watch("src/js/**/*.js").on('change', gulp.parallel('scripts'));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'html', 'images'));
