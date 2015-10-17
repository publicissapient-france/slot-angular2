var gulp = require('gulp');

var PATHS = {
  src: {
    ts: 'src/**/*.ts',
    assets: ['src/**/*.html', 'src/**/*.json'],
    less: 'styles/main.less'
  },
  libs: [
    'node_modules/systemjs/dist/system-csp-production.js',
    'node_modules/angular2/bundles/angular2.min.js',
    'node_modules/angular2/bundles/router.dev.min.js',
    'node_modules/angular2/bundles/http.min.js',
    'node_modules/less/dist/less.min.js'
  ]
};

gulp.task('clean', function (done) {
  var del = require('del');
  del(['dist'], done);
});

gulp.task('ts2js', function () {
  var typescript = require('gulp-typescript');
  var tsResult = gulp.src(PATHS.src.ts)
    .pipe(typescript({
      noImplicitAny: true,
      module: 'system',
      target: 'ES5',
      moduleResolution: 'node',
      emitDecoratorMetadata: true,
      experimentalDecorators: true
    }));

  return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('serve', ['default'], function () {
  var http = require('http');
  var connect = require('connect');
  var serveStatic = require('serve-static');

  var port = 9000, app;

  gulp.watch(PATHS.src.assets, ['assets']);
  gulp.watch(PATHS.src.ts, ['ts2js']);
  gulp.watch(PATHS.src.less, ['styles']);

  app = connect().use(serveStatic(__dirname + '/dist'));
  http.createServer(app).listen(port);
});

/*gulp.task('js', function () {
 return gulp.src(PATHS.src.js)
 .pipe(rename({extname: ''})) //hack, see: https://github.com/sindresorhus/gulp-traceur/issues/54
 .pipe(plumber())
 .pipe(traceur({
 modules: 'instantiate',
 moduleName: true,
 annotations: true,
 types: true,
 memberVariables: true
 }))
 .pipe(rename({extname: '.js'})) //hack, see: https://github.com/sindresorhus/gulp-traceur/issues/54
 .pipe(gulp.dest('dist'));
 });*/

gulp.task('assets', function () {
  return gulp.src(PATHS.src.assets)
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', function () {
  return gulp.src(PATHS.src.less)
    .pipe(gulp.dest('dist'));
});

gulp.task('libs', function () {
  return gulp.src(PATHS.libs)
    .pipe(gulp.dest('dist/lib'));
});

gulp.task('default', ['ts2js', 'libs', 'assets', 'styles']);
