var gulp = require('gulp')
var revHash = require('gulp-rev-hash3')
var page = require('./config')

gulp.task('rev-hash', function () {
  return gulp.src(`dist/**/index.html`)
    .pipe(revHash({
      assetsDir: 'dist',
      projectPath: './'
    }))
    .pipe(gulp.dest(`dist`))
})

gulp.task('default', ['rev-hash'])