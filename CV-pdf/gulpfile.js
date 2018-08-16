var gulp      	= require('gulp');
var sass        = require('gulp-sass');
var imagemin    = require('gulp-imagemin');
var browserSync  = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');


var imgFiles = [
  'src/assets/**/*.{jpg,png,jpeg,svg,gif}',
];

gulp.task('img', function () {
  return gulp.src(imgFiles)
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('dist/'))
});

gulp.task('sass', function() {
   return gulp.src('app/sass/*.scss')
       .pipe(sass())
       .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: false }))
       .pipe(gulp.dest('dist/css/'))
       .pipe(browserSync.reload({stream: true})
)});


gulp.task('pages', function(){
    return gulp.src('app/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream: true}))
});

// simple variant for img
// gulp.task('img', function() {
//     gulp.src('app/images/**/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('dist/images'))
// });

gulp.task('img', function() {
    gulp.src('app/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

// gulp.task('img', function() {
//     gulp.src('app/img/*')
//         .pipe(cache(imagemin({
//             interlaced: true,
//             progressive: true,
//             svgoPlugins: [{removeViewBox: false}],
//             use: [pngquant()]
//         })))
//         .pipe(gulp.dest('dist/img'))
// });

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: 'dist'
		},
		notify: false // delete notifications in browser-sync
	});
});


gulp.task('scripts', function() {
    return gulp.src('app/js/**/*.js')
        // .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});


gulp.task('default', function() {
    gulp.start('pages', 'sass', 'browserSync', 'img', 'scripts');
    gulp.watch('app/*.html', ['pages']);
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/js/**/*.js', ['scripts']);
});

