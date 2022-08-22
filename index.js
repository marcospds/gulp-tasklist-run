module.exports = {
  run(gulp, contains, excluded, cb) {
    var tasklist = gulp._registry._tasks;
    var tasks = [];
    var keys = [];

    forEach(tasklist, contains, excluded, function (key) {
      tasks.push(function (pTasks, pos) {
        keys.push(key);
        if (run(pTasks, pos, keys)) {
          var finishName = `finish_${contains}`;

          gulp.task(finishName, (done) => {
            done();
            cb();
          });

          keys.push(finishName);
          gulp.series(keys)();
        }
      });
    });

    if (tasks.length > 0) {
      tasks[tasks.length - 1].call(null, tasks, tasks.length - 1);
    }
  },
};

function forEach(obj, contains, excluded, fn) {
  var arrExcluded = excluded.split(",");
  var regExContains = new RegExp(contains);
  var key;

  for (key in obj) {
    if (
      exec(fn, key.replace(/\"/g, ""), regExContains, arrExcluded) === false
    ) {
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
