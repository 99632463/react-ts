
const gulp = require('gulp');
const pipeline = require('readable-stream').pipeline;
const $ = require('gulp-load-plugins')();
const del = require('del');

const jsList = [
  '../src/ui/js/index.js',
  '../src/ui/js/main.js',
]

gulp.task('js', () => {
  return pipeline(
    gulp.src(jsList),
    $.concat('common.js'),
    $.terser(),
    $.rename({ suffix: '.min' }),
    gulp.dest('../public/js')
  );
})

gulp.task('cleanJS', () => {
  return del("../public/js/**/*", { force: true });
})

const cssList = [
  '../src/ui/css/index.css',
  '../src/ui/css/main.css'
];

gulp.task('css', () => {
  return pipeline(
    gulp.src(cssList),
    $.concat('common.css'),
    $.uglifycss({ maxLineLen: 80 }),
    gulp.dest('../public/css')
  );
})

gulp.task('cleanCSS', () => {
  return del("../public/css/**/*", { force: true })
})

gulp.task('less', () => {
  return pipeline(
    gulp.src('../src/ui/less/*'),
    $.less(),
    $.uglifycss({ maxLineLen: 80 }),
    $.concat('common.less'),
    gulp.dest('../public/less')
  );
})

gulp.task('cleanLess', () => {
  return del("../public/less/**/*", { force: true })
})

gulp.task('image', () => {
  return pipeline(
    gulp.src('../src/ui/images/*'),
    gulp.dest('../public/img')
  );
})

gulp.task('cleanImage', () => {
  return del("../public/img/**/*", { force: true })
})

gulp.task('fonts', () => {
  return pipeline(
    gulp.src('../src/ui/fonts/**/*'),
    gulp.dest('../public/fonts')
  );
})

gulp.task('cleanFonts', () => {
  return del("../public/fonts/**/*", { force: true })
})

const allTask = ['js', 'css', 'less', 'image', 'fonts'];
const allCleanTask = ['cleanJS', 'cleanCSS', 'cleanLess', 'cleanImage', 'cleanFonts'];

gulp.task('default', gulp.parallel(allTask));
gulp.task('cleanAllTask', gulp.parallel(allCleanTask));