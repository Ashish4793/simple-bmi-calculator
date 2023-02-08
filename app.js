const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');




app.get("/", function(req,res){
    res.render("home");
});


app.post("/submit", function(req,res){ 
   const height = parseFloat(req.body.height);
   const weight = parseFloat(req.body.weight);
   const height_m = height / 100;
   var height_f = height_m * height_m;
   height_f = +height_f.toFixed(2);
   var bmi = weight / height_f;
   bmi = +bmi.toFixed(2);
   res.render("result", {finalBMI : bmi});
});





app.listen(3000, function(){
    console.log("<<<<<<<<<<----------Server started on port 3000-------->>>>>>>>>>");
})