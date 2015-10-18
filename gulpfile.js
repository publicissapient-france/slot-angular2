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
    var sourcemaps = require('gulp-sourcemaps');

    var tsResult = gulp.src(PATHS.src.ts)
        .pipe(sourcemaps.init())
        .pipe(typescript({
            noImplicitAny: true,
            module: 'system',
            target: 'ES5',
            moduleResolution: 'node',
            emitDecoratorMetadata: true,
            experimentalDecorators: true
        }))
        .js
        .pipe(sourcemaps.write());

    return tsResult.pipe(gulp.dest('dist'));
});

gulp.task('serve', ['default'], function () {
    var http = require('http');
    var connect = require('connect');
    var serveStatic = require('serve-static');

    var port = 9001, app;

    gulp.watch(PATHS.src.assets, ['assets']);
    gulp.watch(PATHS.src.ts, ['ts2js']);
    gulp.watch(PATHS.src.less, ['styles']);

    app = connect().use(serveStatic(__dirname + '/dist'));
    http.createServer(app).listen(port);
});

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
