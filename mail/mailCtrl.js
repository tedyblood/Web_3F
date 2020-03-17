var nodemailer = require('nodemailer');
// email sender function
exports.sendEmail = function (req, res) {
    // Definimos el transporter
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'tedy.panama@gmail.com',
            pass: 'LoledY14'
        }
    });
    // Definimos el email
    var mailOptions = {
        from: 'Remitente',
        to: 'josueth,acevedo@gmail.com',
        subject: 'Esto es el Asunto',
        text: 'Contenido del email de pruebas'
    };
    // Enviamos el email
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.send(500);
        } else {
            console.log("Email sent");
            res.status(200).jsonp(req.body);
        }
    });
};