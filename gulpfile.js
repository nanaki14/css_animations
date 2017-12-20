const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require("gulp-imagemin");
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const gifsicle = require('imagemin-gifsicle');
const svgo = require('imagemin-svgo');
const uglify = require('gulp-uglify');
const browserify = require('gulp-browserify');
const babel = require('gulp-babel');
const plumber = require("gulp-plumber");
const ejs = require('gulp-ejs');
const notify = require('gulp-notify');
const changed = require('gulp-changed');
const browserSync = require('browser-sync').create();

const baseDir = {
  dest: 'html',
  sass: 'src/**/*.scss',
  js: 'src/**/*.js',
  ejs: 'src/**.ejs',
  img: 'src/**/*.{png,jpg,gif,svg}'
}

//sassコンパイル
gulp.task('sass', () => {
  return gulp.src(baseDir.sass)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write({includeContent: false}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
    .pipe(autoprefixer({
      browsers: [
        'last 2 version',
        'Explorer >= 11',
        'iOS >= 8.1',
        'Android >= 4.4'
      ],
      cascade: false
    }))
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest(baseDir.dest))
    .pipe(browserSync.stream());
});


gulp.task('ejs', () => {
  return gulp.src([
      baseDir.ejs,
      'src/**/*.ejs',
      '!' + 'src/**/_*.ejs'
    ])
    .pipe(plumber())
    // .pipe(changed(baseDir.dest))
    .pipe(ejs({}, {}, {
      'ext': '.html'
    }))
    .pipe(gulp.dest(baseDir.dest))
    .pipe(browserSync.stream());
});

//babel
gulp.task('babel', () => {
  gulp.src([baseDir.js, '!src/**/_*.js'])
    .pipe(sourcemaps.init())
    .pipe(browserify({
      insertGlobals: true,
      debug: !gulp.env.production
    }))
    .pipe(babel({presets: ['env']}))
    .pipe(uglify())
    .pipe(plumber())
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest(baseDir.dest))
    .pipe(browserSync.stream());
});

//画像圧縮
gulp.task('imagemin', () => {
  gulp.src(baseDir.img)
    .pipe(imagemin([
      pngquant({ quality: '85-95', speed: 1 , floyd:0}),
      mozjpeg({ quality: 85, progressive: true }),
      imagemin.svgo(),
      imagemin.gifsicle()
    ]))
    .pipe(imagemin())
    .pipe(gulp.dest(baseDir.dest));
});

gulp.task('copy', () => {
  return gulp.src([
      'src/**/*',
      '!src/_**',
      '!src/**/*.scss',
      '!src/**/*.js',
      '!src/*.ejs',
      '!src/**/*.ejs',
      '!src/*.+(jpg|png|gif|svg)'
    ])
    .pipe(gulp.dest(baseDir.dest))
});

gulp.task('watch', () => {
  browserSync.init({
    server: {
      baseDir: baseDir.dest
    }
  });

  gulp.watch([baseDir.sass], ['sass']);
  gulp.watch([baseDir.ejs,'src/**/*.ejs'], ['ejs']);
  gulp.watch([baseDir.js], ['babel']);
  gulp.watch([baseDir.img], ['imagemin']);
  gulp.watch([
    'src/**/*',
    '!src/*.ejs',
    '!src/**/*.ejs',
    '!src/**/*.js',
    '!src/**/*.scss',
    '!src/**/*.+(jpg|png|gif|svg)'
  ], ['copy']);
});

gulp.task('default', ['copy','sass','ejs','babel','imagemin','watch']);
