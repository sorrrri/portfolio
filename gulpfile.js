const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const browserSync = require('browser-sync')
const babel = require('gulp-babel')
const scss = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const ghPages = require('gulp-gh-pages')
const nunjucks = require('gulp-nunjucks-render')

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

gulp.task('scss:compile', () => {
  const options = {
    outputStyle: 'nested',
    indentType: 'space',
    indentWidth: 4,
    precision: 8,
    sourceComments: true
  }
  return gulp.src(PATH.ASSETS.STYLE + '/*.scss')
    .pipe(sourcemaps.init())
    .pipe(scss(options))
    .pipe(autoprefixer({cascade: false}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DEST_PATH.ASSETS.STYLE))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('script', () => {
  return gulp.src(PATH.ASSETS.SCRIPT + '/*.js')
    .pipe(babel({
      "presets": [
        "@babel/preset-env"
      ]
    }))
    .pipe(gulp.dest(DEST_PATH.ASSETS.SCRIPT))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('html', () => {
  return gulp
    .src(PATH.HTML + '/*.html')
    .pipe(nunjucks({
      path: ['./src/templates']
    }))
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
  return new Promise(resolve => {
    browserSync.init(null, {
      proxy: 'http://localhost:8005',
      port: 8006
    })
    resolve()
  })
})

gulp.task('watch', () => {
  return new Promise(resolve => {
    gulp.watch(PATH.HTML + "/**/*.html", gulp.series(['html']))
    gulp.watch(PATH.ASSETS.STYLE + "/**/*.scss", gulp.series(['scss:compile']))
    gulp.watch(PATH.ASSETS.SCRIPT + "/**/*.js", gulp.series(['script']))
    resolve()
  })
})

gulp.task('deploy', () => {
  return gulp
    .src('./dist/**/*')
    .pipe(ghPages())
})

const series = gulp.series([
  'clean',
  'library',
  'images',
  'scss:compile',
  'fonts',
  'script',
  'html',
  'nodemon:start',
  'browserSync',
  'watch'
])
gulp.task('default', series)
