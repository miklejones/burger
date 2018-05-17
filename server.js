var bodyParser = require('body-parser');
const express = require('express');

const PORT = process.env.PORT || 8081;

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burgers_controller.js');

app.use(routes);

app.listen(PORT, ()=> {
    console.log("Serverlistening on: http://localhost:" + PORT);
    
})