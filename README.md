# gulp-tasklist-run
Gulp task list run synchronous.

## Installation

```shell
npm install --save gulp-tasklist-run
```

## How to use

Here is the demo code:

```js
var gulp = require('gulp');
const TaskList = require('gulp-tasklist');
const TaskListRun = require('gulp-tasklist-run');

gulp.task('compile:typescript', [], function () {
    // ...
});

gulp.task('e2e:demo', [], function () {
    // ...
});

gulp.task('e2e:test', [], function () {
    // ...
});

gulp.task('e2e:login', [], function () {
    // ...
});

gulp.task('e2e:menu', [], function () {
    // ..
});

gulp.task('e2e:sec', [], function () {
    // ..
});
```

Just require `gulp-tasklist-run` package and call `run()` method, it receives three parameter, the result of getList(gulp-tasklist), the inclusion(use starts with) and the excluded tasks.
Sample:

```javascript
gulp.task('e2e:*', function() {

    let tasks = TaskList.getList('./gulpfile.js');

    TaskListRun.run(tasks, 'e2e:', 'e2e:*,e2e:test,e2e:demo');
});

//> Executing task: node_modules\.bin\gulp.cmd e2e:* <
//
//[15:26:00] Using gulpfile c:\GIT\master\gulpfile.js
//[15:26:00] Starting 'e2e:*'...
//[15:26:00] Finished 'e2e:*' after 13 ms
//[15:26:00] Starting 'e2e:sec'...
//[15:26:00] Finished 'e2e:sec' after 91 μs
//[15:26:00] Starting 'e2e:menu'...
//[15:26:00] Finished 'e2e:menu' after 31 μs
//[15:26:00] Starting 'e2e:login'...
//[15:26:00] Finished 'e2e:login' after 23 μs
//
//Terminal will be reused by tasks, press any key to close it.
```

## License

MIT


