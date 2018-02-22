'use strict';

let gulp = require('gulp');

let webpackStream = require('webpack-stream');

let WebpackConfig = require('./WebpackConfig');
let descriptor = require('./package.json');


let config = new WebpackConfig(descriptor, {
  src: './src/',
  dist: './dist/'
});


gulp.task(
  `${config.name}/build`,
  function () {
    return gulp
      .src(config.path.src)
      .pipe(webpackStream(config.get()))
      .pipe(gulp.dest(config.path.dist));
  }
);

gulp.task(
  `${config.name}/watch`, function () {
    return gulp
      .watch(`${config.path.src}**/*.*`, [
        `${config.name}/build`
      ]);
  }
);
