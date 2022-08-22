# gulp-tasklist-run
Gulp task list run synchronous.

## Installation

```shell
npm install --save gulp-tasklist-run
```

## How to use

Here is the demo code:

```js
var gulp = require("gulp");

const TaskListRun = require('gulp-tasklist-run');

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
```

Just require `gulp` package and call `run()` method, it receives three parameter, the gulp instance, the inclusion(use starts with) and the excluded tasks(regexp).
Sample:

```javascript
gulp.task("e2e:*", (done) => {
  TaskListRun.run(gulp, "e2e:*", "e2e:\\*", done);
});

//Starting 'e2e:*'...
//Starting 'e2e:login'...
//It works e2e:login!
//Finished 'e2e:login' after 745 μs
//Starting 'e2e:demo'...
//It works e2e:demo!
//Finished 'e2e:demo' after 339 μs
//Starting 'finish_e2e:*'...
//Finished 'finish_e2e:*' after 263 μs
//Finished 'e2e:*' after 2.7 ms
```

## License

MIT
