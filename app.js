const express = require("express");

const bodyParser = require("body-parser");
const ejs = require("ejs");
const { urlencoded } = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');
var items = [];
app.get("/", function (req, res) {
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };
    var day = today.toLocaleDateString("en-US", options);
    res.render("list", {
        kindOfDay: day,
        newlistitems: items
    });
});
app.post("/", function (req, res) {
    var item = req.body.newitem;


    items.push(item);


    res.redirect("/");

});

app.listen(process.env.PORT||3000, function () {
    console.log("Server started on port 3000");
});
