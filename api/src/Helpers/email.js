const nodemailer = require('nodemailer');
require('dotenv').config();

const sendMail = async(text) => {
    const config = {
        host: "smtp.gmail.com",
        port: 587,
        auth :{ 
            user: `${process.env.USER}`,
            pass: `${process.env.PASS}`
        }
    }

    
    const mensaje = {
        from: `${process.env.USER}`,
        to: "rreyesfdz96@gmail.com",
        subject: "Correo de prueba",
        text: text
    }
    
    const transport = nodemailer.createTransport(config);
    
    const info = await transport.sendMail(mensaje);
    
    

}


module.exports = sendMail;