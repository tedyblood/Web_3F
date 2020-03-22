var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var cors = require("cors");
const creds = require("./config");
var path = require("path");

var transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b3ef2e71b639cb",
    pass: "52eeca9244e84e"
  }
});

// var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
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
    subject: "New Message from Contact Form",
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
