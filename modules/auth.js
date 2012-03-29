var unixlib = require("unixlib");

// Change accordingly or write your own.
var service = "system-auth";
var username = "dpacaud";
var password = "";

unixlib.pamauth(service, username, password, function(result) {
    console.log("Username: " + username + ", password: " + password + ", result: " + result);
});