var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");
const fs = require("fs");

const filePath =
  "C:\\Users\\Oğuzhan\\Desktop\\Oguzhan\\Kişisel Web Sitesi\\eMail.json";

var mails = fs.readFileSync(filePath);
var newMails = JSON.parse(mails);

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, function () {
  console.log("Port dinleniyor.");
});

app.get("/api/mails", function (request, response) {
  response.send(newMails);
});

// -----------------------------------POST-----------------------------------

// inputa girilen e-mailleri, eMail.json ' a ekler

app.post("/api/mails/add", function (request, response) {
  var apiRequest = request.body;
  console.log(apiRequest);
  for (var index = 0; index < newMails.length; index++) {
    if (newMails[index].eMail === apiRequest.eMail) {
      response.status(500).send({ error: "Bu e-mail zaten kayıtlı" });
      return;
    }
  }

  fs.readFile(filePath, "utf8", function readFileCallback(err, data) {
    if (err) {
      console.log(err);
    } else {
      mails = fs.readFileSync(filePath);
      newMails = JSON.parse(mails); //now it an object
      newMails.push(apiRequest); //add some data
      var json = JSON.stringify(newMails); //convert it back to json
      fs.writeFile(filePath, json, "utf8", (err) => {
        if (err !== null) {
        console.log("Dosya oluşturulurken Bir hata gerçekleşti");
        } 
      }); // write it back
    }
  });
  
  response.send(newMails);
});
