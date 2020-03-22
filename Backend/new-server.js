var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
const bodyParser = require("body-parser"); //modulo para procesar texto en el post body del request
var cors = require("cors");
const creds = require("./config");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //procesa el body del post request y genera un objeto json

app.post("/send", (req, res) => {
  //declaramos la ruta a la que se conectara la forma
  console.log(req.body);
  const formData = { ...req.body }; // asignamos a formData el contenido de los campos de la forma

  async function main() {
    //declaramos la funcion async para que espere resultado

    // creamos el objeto de transporte smtp
    let transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "b3ef2e71b639cb",
        pass: "52eeca9244e84e"
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
      }
    });

    // envio de correo
    let info = await transporter.sendMail({
      from: '"server.com" <me@server.com>', // email que envia
      to: "destino@servidor.com", // lista de destinatarios
      subject: "sujeto del correo", // sujeto del email
      text: `
              ${formData["name"]} 
              ${formData["message"]}
              `, // cargamos la info del campo name y message, deben coincidir con los nombres del campo en la forma
      html: `
              <h3>Contacto desde la pagina</h3>
              <ul>
                  <li>Enviado por: ${formData["name"]}</li>
                  <li>E-mail: ${formData["email"]}</li>
              </ul>
              <h4>Mensaje</h4>
              <p>${formData["message"]}</p>` // nos permite enviar un html en el correo
    });

    //console.log("Message sent: %s", info.messageId);
  }
  app.use(cors());
  app.use(express.json());
  app.use("/", router);

  main().catch(console.error); //atrapamos cualquier error

  res.send({ msg: "email has been sent" }); //devolvemos mensaje al front para el usuario y modificar el DOM
});

app.listen(3002, () => console.log("Listening on port 3002"));
