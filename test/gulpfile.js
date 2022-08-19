var gulp = require("gulp");

const TaskListRun = require("../index.js");

gulp.task("compile:demo", (done) => {
  console.log("It works!");
  done();
});

gulp.task("compile:login", (done) => {
  console.log("It works!");
  done();
});

gulp.task("e2e:demo", (done) => {
  console.log("It works e2e:demo!");
  done();
});

gulp.task("e2e:login", (done) => {
  console.log("It works e2e:login!");
  done();
});

gulp.task("unit:demo", (done) => {
  console.log("It works!");
  done();
});

gulp.task("unit:login", (done) => {
  console.log("It works!");
  done();
});

/*gulp.task("e2e:*", (done) => {
  TaskListRun.run(gulp, "./gulpfile.js", "e2e:*", "e2e:\\*", done);
  console.log("log log log");
  done();
});*/

gulp.task("e2e:*", (done) => {
  TaskListRun.run(gulp, "./gulpfile.js", "e2e:*", "e2e:\\*", done);
  console.log("log log log");
  //done();
});

gulp.task("default", gulp.series("e2e:*"));
