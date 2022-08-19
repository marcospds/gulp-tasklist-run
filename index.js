//const gulp = require("gulp");
const TaskList = require('gulp-tasklist');
//const execSync = require('child_process').execSync;

module.exports = {
  run(gulp, file, contains, excluded, cb) {
    var tasklist = TaskList.getList(file);
    var tasks = [];
    var keys = []
    forEach(tasklist.data, contains, excluded, function (key) {
      tasks.push(function (pTasks, pos) {
        //const output = execSync(`gulp -f ${file} ${key}`, { encoding: 'utf-8' });  // the default is 'buffer'
        //console.log(`${output.substring(0, output.length - 1).replace(/.*\n/, "")}`);

        //console.log(gulp._registry._tasks["compile:demo"].unwrap().call(this, cb));

        //console.log(gulp._registry._tasks);

        //console.log(key);

        //console.log(gulp._registry._tasks[key]);

        keys.push(key);

        //gulp.series(key)();

        if(run(pTasks, pos, keys)){
          keys.push(cb);
          gulp.series(keys)();
        }
      });
    });
    if (tasks.length > 0) {
      tasks[tasks.length - 1].call(null, tasks, tasks.length - 1);
    }
  }
};

function forEach(obj, contains, excluded, fn) {
  var arrExcluded = excluded.split(",");
  var regExContains = new RegExp(contains);
  var key;

  for (key in obj) {
    if (exec(fn, key.replace(/\"/g, ""), regExContains, arrExcluded) === false) {
      break;
    }
  }
  return forEach;
}

function exec(fn, key, regExContains, arrExcluded) {
  var exMatch = arrExcluded.find((e) => {
    var bol = new RegExp(e).test(key);
    return bol;
  });

  if (regExContains.test(key) && exMatch === undefined)
    return fn.call(null, key);
  return true;
}

function run(tasks, pos) {
  pos--;
  if (pos >= 0) {
    tasks[pos].call(null, tasks, pos);
    return true;
  }
  return false;
}
