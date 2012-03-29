var fs = require("fs")

exports.getFiles = function getFiles() {
    var files = fs.readdirSync('/');
    return JSON.stringify(files);
}

