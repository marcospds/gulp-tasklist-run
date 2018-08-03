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

function forEach(obj, contains, excluded, fn){

    excluded = excluded + ",";
    
    var key;
    for (key in obj) {
        if (exec(fn, key) === false) {
            break;
        }
    }
    function exec(fn, key){
        if(!key.startsWith(contains)
        || excluded.includes(key + ","))
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
