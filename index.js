var gulp = require('gulp');

module.exports = {
    run(tasklist, inclusion, exclusions) {
        var tasks = [];
        forEach(tasklist.data, inclusion, exclusions, function (key){
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

function forEach(obj, inclusion, exclusions, fn){
    var key;
    for (key in obj) {
        if (exec(fn, key) === false) {
            break;
        }
    }
    function exec(fn, key){
        if(!key.startsWith(inclusion)
        || exclusions.includes(key))
            return true;
        return fn.call(null, key);
    }
    return forEach;
};

function run(tasks, pos){
    pos--;
    if(pos >= 0)
        tasks[pos].call(null, tasks, pos);
};
