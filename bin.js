#!/usr/bin/env node

let fileReplace = require('../');
let minimist = require('minimist');
let argv = minimist(process.argv.slice(2), {
    boolean: ['r']
});
console.log("1111:" + JSON.stringify(argv));
let file = argv.f;
let patterns = argv.p;
let replace = argv.r;

if (replace) {
    patterns = patterns.replace(/'/g, "\"");
}

(function exec() {
    fileReplace(file, patterns, callback);
    function callback(err) {
        if (err) {
            console.error(err.message);
            process.exit(1);
        } else {
            process.exit(0);
        }
    }
})();

