"use strict";

import {paths} from "../gulpfile.babel";
import webpack from "webpack";
import webpackStream from "webpack-stream";
import gulp from "gulp";
import gulpif from "gulp-if";
import rename from "gulp-rename";
import browsersync from "browser-sync";
import debug from "gulp-debug";
import yargs from "yargs";
import rigger from "gulp-rigger";

const webpackConfig = require("../webpack.config.js"),
	argv = yargs.argv,
	production = !!argv.production;

webpackConfig.mode = production ? "production" : "development";
webpackConfig.devtool = production ? false : "source-map";

gulp.task("assets", () => {
	return gulp.src(paths.assets.src)
		.pipe(gulp.dest(paths.assets.dist))
		.pipe(debug({
			"title": "JS assets"
		}))
		.on("end", browsersync.reload);
});
