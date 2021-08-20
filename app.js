const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", function(req, res){
  const title= "Information Destination";
  res.render("index", {title: title});
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
