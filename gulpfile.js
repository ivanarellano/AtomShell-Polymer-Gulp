var gulp = require('gulp');
var shell = require('gulp-shell');
var downloadatomshell = require('gulp-download-atom-shell');

gulp.task('downloadatomshell', function(cb){
    downloadatomshell({
        version: '0.20.4',
        outputDir: 'binaries',
        downloadDir: 'cache',
        rebuild: false
    }, cb);
});

gulp.task('default', ['downloadatomshell']);

gulp.task('demo', shell.task([
    './binaries/Atom.app/Contents/MacOS/Atom default_app'
    ]));

gulp.task('democ', shell.task([
    './binaries/Atom.app/Contents/MacOS/Atom default_app components/' + gulp.env.comp + '/demo.html'
]));
