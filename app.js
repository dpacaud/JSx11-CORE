var application_root = __dirname,
    express = require("express"),
    fs = require("fs");
    path = require("path"),
    ls = require("./modules/terminal/ls");

var options = {
    key: fs.readFileSync('/home/dpacaud/certifs/key.pem'),
    cert: fs.readFileSync('/home/dpacaud/certifs/certificate.pem')
}

var app = express.createServer(options);


// Config

app.configure(function () {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/api', function (req, res) {
    res.send('Ecomm API is running');
});

app.get('/ls', function (req, res) {
    res.send(ls.getFiles());
});

// Launch server

app.listen(4242);