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

gulp.task('fonts', () => {
    return gulp.src('./src/assets/fonts/*.*')
        .pipe(gulp.dest('./dist/assets/fonts'))
})


gulp.task('images', () => {
    return gulp.src('./src/assets/images/*.*')
        .pipe(gulp.dest('./dist/assets/images'))
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
    return gulp.src('./src/assets/css/*.*')
        .pipe(sourcemaps.init())
        .pipe(scss(options))
        .pipe(autoprefixer({cascade: false}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/assets/css'))
        .pipe(browserSync.reload({stream: true}))
})


gulp.task('script', () => {
    return gulp.src('./src/assets/js/*.js')
        .pipe(babel({
            'presets': [
                '@babel/preset-env'
            ]
        }))
        .pipe(gulp.dest('./dist/assets/js'))
        .pipe(browserSync.reload({stream: true}))
})

gulp.task('html', () => {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'))
})

gulp.task('clean', () => {
    return new Promise(resolve => {
        del.sync('./dist')
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
            proxy: 'http://localhost:5020',
            port: 5021
        })
        resolve()
    })
})

gulp.task('watch', () => {
    return new Promise(resolve => {
        gulp.watch('./src/**/*.html', gulp.series(['html']))
        gulp.watch('./src/assets/scss/**/*.scss', gulp.series(['scss:compile']))
        gulp.watch('./src/assets/js/**/*.js', gulp.series(['script']))
        resolve()
    })
})

gulp.task('deploy', () => {
    return gulp.src('./dist/**/*')
        .pipe(ghPages())
})

const series = gulp.series([
    'clean',
    'fonts',
    'images',
    'scss:compile',
    'script',
    'html',
    'nodemon:start',
    'browserSync',
    'watch'
])

gulp.task('default', series)
