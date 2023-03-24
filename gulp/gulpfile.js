const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer =require('gulp-autoprefixer'); 
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');
const pug = require( 'gulp-pug' );


function pugCompiler(){
    return gulp
      .src([ 'pug/**/*.pug', '!pug/**/_*.pug' ])
      .pipe(pug({
        pretty: true
      }))
      .pipe( gulp.dest( './dist'))
      .pipe(browserSync.stream());
  };

function sassCompiler(){
    var processors = [
        cssnext({
            browsers: 'last 2 versions'
        })
    ];
    // where is my scss
    return gulp.src('./sass/**/*.scss', '!./sass/**/_*.scss' )
    // compile
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(sass(
        {
            outputStyle: "expanded"
        }
    ))
    // where to save compiled scss
    .pipe(gulp.dest(`./dist/css`))
    .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server: {
            baseDir:'./dist'
        }
    });
    gulp.watch('./pug/**/*.pug',pugCompiler);
    gulp.watch('./sass/**/*.scss', sassCompiler);
    gulp.watch('./dist/**/*.html').on('change', browserSync.reload);
    gulp.watch('./dist/js/**/*.js').on('change', browserSync.reload);
    gulp.watch('./dist/css/**/*.css').on('change', browserSync.reload);
}
exports.sassCompiler = sassCompiler;
exports.watch = watch;
exports.pugCompiler = pugCompiler;