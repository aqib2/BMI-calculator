const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/" , function (req, res) {
    res.sendFile(__dirname + "/Index.html");
});

app.get("/bmiCalculator.html", function (req, res){
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmiCalculator", function (req, res){
   var height = Number(req.body.height1);
   var weight1 = Number(req.body.weight1);

    var result1 = weight1/(height^2);

    res.send("The result for your BMI is" + result1);
});

app.post("/", function (req, res){

 var num1 = Number(req.body.num1);
 var num2 = Number(req.body.num2);

 var result = num1 + num2;

  res.send("The result  for your calculation is " + result);
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});