import gulp from "gulp";
import shell from "gulp-shell";

gulp.task("run", shell.task("parcel starter/index.html"));
gulp.task("build", shell.task("parcel build starter/index.html"));
gulp.task("default", gulp.series("build", "run"));
gulp.task("test", shell.task("mocha starter/test/shuffle.js"));
gulp.task("cypress", shell.task("cypress run"));
