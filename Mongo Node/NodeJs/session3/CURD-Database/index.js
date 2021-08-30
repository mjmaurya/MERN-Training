const connection = require("./models");
const express = require("express");
const app = express();
const path = require("path");
const expresshandlebars = require("express-handlebars");
const bodyparser = require("body-parser").json();
const PeopleController = require("./controllers/people");
app.use(bodyparser.urlencoded({
    extended:true
}));

app.set('views', path.join(__dirname, "/views/"));

app.engine("hbs", expresshandlebars({
    extname:"hbs",
    defaultLayout:"mainlayout",
    layoutsDir: __dirname + "/views/layouts"
}));

app.set("view engine", "hbs");

app.get("/", (req, res)=>{
    //res.send("<h1>Hello</h1>");
    res.render("index",{});
});

app.use("/people", PeopleController);
app.listen('3000');