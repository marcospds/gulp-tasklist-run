var gulp = require('gulp');

module.exports = {
    run(tasklist, contains, excluded) {
        var tasks = [];
        forEach(tasklist.data, contains, excluded, function (key){
            tasks.push(function (pTasks, pos){
                gulp.start(key, function(){
                    run(pTasks, pos)
                });
            });
        });
        if(tasks.length > 0)
            tasks[tasks.length - 1].call(null, tasks, tasks.length - 1);
    }
};

function forEach(obj, contains, excluded, fn) {
    var arrExcluded = excluded.split(',')
    var regExContains = new RegExp(contains)
    var key;

    for (key in obj) {
        if (exec(fn, key) === false) {
            break;
        }
    }
    function exec(fn, key){
        var exMatch = arrExcluded.find(e => new RegExp(e).test(key))

        if(regExContains.test(key) && exMatch === undefined)
            return fn.call(null, key);
        return true;
    }
    return forEach;
};

function run(tasks, pos){
    pos--;
    if(pos >= 0)
        tasks[pos].call(null, tasks, pos);
};
