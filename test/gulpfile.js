var gulp = require("gulp");

const TaskListRun = require("../index.js");

gulp.task("compile:demo", (done) => {
  console.log("It works compile:demo!");
  done();
});

gulp.task("compile:login", (done) => {
  console.log("It works compile:login!");
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
  console.log("It works unit:demo!");
  done();
});

gulp.task("unit:login", (done) => {
  console.log("It works unit:login!");
  done();
});

gulp.task("e2e:*", (done) => {
  TaskListRun.run(gulp, "e2e:*", "e2e:\\*", done);
});

gulp.task("unit:*", (done) => {
  TaskListRun.run(gulp, "unit:*", "unit:\\*", done);
});

gulp.task("compile:*", (done) => {
  TaskListRun.run(gulp, "compile:*", "compile:\\*", done);
});

gulp.task("default", gulp.series("e2e:*", "compile:*", "unit:*"));
