require('nodetime').profile();
var application_root = __dirname,
    express = require("express"),
    fs = require("fs");
    path = require("path"),
    ls = require("./modules/terminal/ls"),
    auth = require("./modules/auth");


var options = {
    key: fs.readFileSync('/usr/local/node/certificates/key.pem'),
    cert: fs.readFileSync('/usr/local/node/certificates/certificate.pem')
};

var process_group = "", process_uid = "";
var app = express.createServer(options);


// Config

app.configure(function () {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});
console.log("Process gid : "+ process.getgid() + "\nProcess UID : "+process.getuid());
// This is a test url, to check that service is up and running
app.get('/api', function (req, res) {
    res.send('Ecomm API is running');
});

//First attempt to ls /
app.get('/ls', function (req, res) {
    res.send(ls.getFiles());
});

app.get('/login', function(req,res) {
    var page = "<form action='auth' method='post'> username : <input type='text' name='username' />password : <input type='password' name='password'><input type='submit' value='go'></form>";
    res.send(page);
});

// auth try
app.post('/auth', function (req, res) {
    auth.checkAuth(req.body.username,req.body.password, function(result){res.send("Authentication status : " + result); });
});


// Launch server on port 4242
app.listen(4242);
