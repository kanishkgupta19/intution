const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(express.static("public"));

app.get("/rstechsoftwares.com", (req, res) => {
  res.status(301).redirect("https://www.rstechsoftwares.com");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT || 3000, function (err) {
  if (err) {
    console.log("err is", err);
  } else {
    console.log("server started on 3000 ");
  }
});
