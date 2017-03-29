var gulp = require('gulp')
var revHash = require('gulp-rev-hash3')

gulp.task('rev-hash', function () {
  return gulp.src(`dist/**/index.html`)
    .pipe(revHash({
      assetsDir: 'dist',
      projectPath: './'
    }))
    .pipe(gulp.dest(`dist`))
})

gulp.task('default', ['rev-hash'])