const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

const tasksMinifyImg = [
  'minify-images-footer',
  'minify-images-banner',
  'minify-images-header',
  'minify-images-products'
]

gulp.task('minify-images-footer', async function () {
  gulp.src('src/assets/images/footer/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('src/assets/images/footer/'))
})

gulp.task('minify-images-banner', async function () {
  gulp.src('src/assets/images/banners/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('src/assets/images/banners/'))
})

gulp.task('minify-images-header', async function () {
  gulp.src('src/assets/images/header/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('src/assets/images/header/'))
})

gulp.task('minify-images-products', async function () {
  gulp.src('src/assets/images/products/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('src/assets/images/products/'))
})

gulp.task('default', gulp.series(...tasksMinifyImg))