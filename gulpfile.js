const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const browserSync = require('browser-sync')
const autoprefixer = require('gulp-autoprefixer')
const del = require('del')

const PATH = {
  HTML: './src',
  ASSETS: {
    FONTS: './src/assets/fonts',
    STYLE: './src/assets/css',
    IMAGES: './src/assets/images',
    SCRIPT: './src/assets/js',
    LIB: './src/assets/lib'
  }
}

const DEST_PATH = {
  HTML: './dist',
  ASSETS: {
    FONTS: './dist/assets/fonts',
    STYLE: './dist/assets/css',
    IMAGES: './dist/assets/images',
    SCRIPT: './dist/assets/js',
    LIB: './dist/assets/lib'
  }
}



gulp.task('library', () => {
  return gulp.src(PATH.ASSETS.LIB + '/*.js')
    .pipe(gulp.dest(DEST_PATH.ASSETS.LIB))
})


gulp.task('fonts', () => {
  return gulp.src(PATH.ASSETS.FONTS + '/*.*')
    .pipe(gulp.dest(DEST_PATH.ASSETS.FONTS))
})

gulp.task('images', () => {
  return gulp.src(PATH.ASSETS.IMAGES + '/*.*')
    .pipe(gulp.dest(DEST_PATH.ASSETS.IMAGES))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('css', () => {
  return gulp.src(PATH.ASSETS.STYLE + '/*.*')
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest(DEST_PATH.ASSETS.STYLE))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('script', () => {
  return gulp.src(PATH.ASSETS.SCRIPT + '/*.js')
    .pipe(gulp.dest(DEST_PATH.ASSETS.SCRIPT))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('html', () => {
  return gulp
    .src(PATH.HTML + '/*.html')
    .pipe(gulp.dest(DEST_PATH.HTML))
})

gulp.task('clean', () => {
  return new Promise(resolve => {
    del.sync(DEST_PATH.HTML)
    resolve()
  })
})

gulp.task('nodemon:start', () => {
  return new Promise(resolve => {
    nodemon({
      script: 'app.js',
      watch: 'app'
    })
    resolve()
  })
})

gulp.task('browserSync', () => {
  return browserSync.init(null, {
    proxy: 'http://localhost:8005',
    port: 8006
  })
})

gulp.task('watch', () => {
  return
  gulp.watch(PATH.HTML + "/**/*.html", gulp.series(['html']))
  gulp.watch(PATH.ASSETS.STYLE + "/**/*.css")
  gulp.watch(PATH.ASSETS.SCRIPT + "/**/*.js", gulp.series(['script']))
})


const series = gulp.series([
  'clean',
  'library',
  'images',
  'css',
  'fonts',
  'script',
  'html',
  'nodemon:start',
  'browserSync',
  'watch'
])
gulp.task('default', series)