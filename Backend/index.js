var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var cors = require("cors");
const creds = require("./config");
var path = require("path");

var transporter = nodemailer.createTransport({
  host: "chi-node26.websitehostserver.net",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: "x@3f-latam.com",
    pass: "AK9p$C0iHck}"
  }
});

// var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages, working chinode");
  }
});

router.post("/send", (req, res, next) => {
  var name = req.body.data.rnName;
  var email = req.body.data.rnEmail;
  var message = req.body.data.rnMessage;
  var content = `name: ${name} \n email: ${email} \n message: ${message} `;

  var mail = {
    from: name + "<" + email + ">",
    to: "tedy.panama+test@gmail.com", // Change to email address that you want to receive messages on
    subject: "Nuevo Formulario desde sitio Web",
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err);
      res.json({
        status: "fail"
      });
    } else {
      res.json({
        status: "success"
      });
    }
  });
});

const app = express();

app.use(express.static(path.join(__dirname, "/public"))); //carga el website compilado del frontend

app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3002);
