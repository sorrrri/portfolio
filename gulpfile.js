const gulp = require("gulp");
const nodemon = require("gulp-nodemon");
const browserSync = require("browser-sync");
const nunjucks = require("gulp-nunjucks-render");
const del = require("del");
const scss = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const ghPages = require("gulp-gh-pages");

const PATH = {
  HTML: "./src",
  ASSETS: {
    FONTS: "./src/assets/fonts",
    IMAGES: "./src/assets/images",
    SCRIPT: "./src/assets/js",
    LIB: "./src/assets/lib",
  },
};

const DEST_PATH = {
  HTML: "./dist",
  ASSETS: {
    STYLE: "./dist/assets/css",
    FONTS: "./dist/assets/fonts",
    IMAGES: "./dist/assets/images",
    SCRIPT: "./dist/assets/js",
    LIB: "./dist/assets/lib",
  },
};

gulp.task("clean", () => {
  return new Promise((resolve) => {
    del.sync(DEST_PATH.HTML);
    resolve();
  });
});

gulp.task("data", () => {
  return gulp.src("./src/**/*.json").pipe(gulp.dest("./dist"));
});

gulp.task("html", () => {
  return gulp
    .src(PATH.HTML + "/**/*.html")
    .pipe(
      nunjucks({
        path: ["./src/templates"],
      })
    )
    .pipe(gulp.dest(DEST_PATH.HTML))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("scss", () => {
  const options = {
    outputStyle: "nested",
    indentType: "space",
    indentWidth: 4,
    precision: 8,
    sourceComments: true,
  };
  return gulp
    .src("./src/**/*.{scss,css}")
    .pipe(sourcemaps.init())
    .pipe(scss(options))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("fonts", () => {
  return gulp.src("./src/**/*.ttf").pipe(gulp.dest("./dist"));
});

gulp.task("images", () => {
  return gulp.src("./src/**/*.{jpg,png,gif,svg}").pipe(gulp.dest("./dist"));
});

gulp.task("script", () => {
  return gulp
    .src("./src/**/*.js")
    .pipe(gulp.dest("./dist"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("library", () => {
  return gulp
    .src(PATH.ASSETS.LIB + "/*.*")
    .pipe(gulp.dest(DEST_PATH.ASSETS.LIB));
});

gulp.task("nodemon:start", () => {
  return new Promise((resolve) => {
    nodemon({
      script: "app.js",
      watch: "app",
    });
    resolve();
  });
});

gulp.task("browserSync", () => {
  return new Promise((resolve) => {
    browserSync.init(null, {
      proxy: "http://localhost:8005",
      port: 8006,
    });
    resolve();
  });
});

gulp.task("watch", () => {
  return new Promise((resolve) => {
    gulp.watch("./src/assets/scss" + "/**/*.scss", gulp.series(["scss"]));
    gulp.watch(PATH.ASSETS.SCRIPT + "/**/*.js", gulp.series(["script"]));
    gulp.watch(PATH.HTML + "/**/*.html", gulp.series(["html"]));
    resolve();
  });
});

gulp.task("deploy", () => {
  return gulp.src("./dist/**/*").pipe(ghPages());
});

const series = gulp.series([
  "clean",
  "data",
  "html",
  "scss",
  "fonts",
  "images",
  "script",
  "library",
  "nodemon:start",
  "browserSync",
  "watch",
]);
gulp.task("default", series);
