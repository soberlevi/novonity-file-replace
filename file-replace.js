/**
 * Created by Levi on 2017/3/9.
 */
let fs = require('fs');

function fileReplace(file, patterns, callback) {
    let data = fs.readFileSync(file).toString().split('\n');
    console.log(patterns);
    patterns = JSON.parse(patterns);

    data.forEach((line, index) => {
        let pattern = patterns.find((pattern) => {
            return line.search(pattern.k + ":") != -1;
        });
        if (pattern) {
            let regexp = new RegExp('(' + pattern.k + ':[\\s])([\\w\"\':\\/\\/\.\-]+)(,{0,1})');
            line = line.replace(regexp, (m, p1, p2, p3) => {
                let result = p1;
                if (typeof pattern.v == 'string') {
                    result += "\"" + pattern.v + "\"" + p3;
                } else {
                    result += pattern.v + p3;
                }
                return result;
            });
            data.splice(index, 1, line);
        }
    });
    let text = data.join('\n');

    fs.writeFile(file, text, (err) => {
        if (err) {
            callback(err)
        } else {
            callback(null);
        }
    });
}

module.exports = fileReplace;

