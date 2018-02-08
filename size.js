var express = require("express");
var bodyParser = require("body-parser");
var multer = require('multer');
var uploaded_file = multer({ dest: 'uploads/' });
var app = express();
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendfile("meta.html");
    // res.sendFile(__dirname + "/html/meta.html");
});

app.post('/myFile', uploaded_file.single('file'), function(req, res, next) {
    var data = req.file;
    // var si = data.size;
    // return res.json(req.file.size);
    res.send({ size: data.size });
});
app.listen(3000, function() {
    console.log("Program is listening on PORT 3000");
})