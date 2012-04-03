var unixlib = require("unixlib");

// Change accordingly or write your own.
var service = "system-auth";


var is_a;

exports.checkAuth = function(user,password,callback){
    unixlib.pamauth(service, user, password, function(result) {
        console.log("Username: " + user + ", password: " + password + ", result: " + result);
        return callback(result);
    });
};