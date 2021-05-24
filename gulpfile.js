const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

gulp.task('reduzir-imagens', function () {
  gulp.src('src/assets/images/banners/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('src/assets/images/banners/**/*'))
})
