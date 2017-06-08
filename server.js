let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let winston_logger = require('./winston_logger')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//connect routes to application
const routes = require('./routes');



// allow cross domain connection
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use('/', routes);

app.listen(3000, function(){
    console.log('App listening on port 3000');
});