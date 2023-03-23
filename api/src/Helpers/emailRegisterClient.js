const nodemailer = require('nodemailer');
require('dotenv').config();

const sendMailWelcome = async(email,firstname,lastname) => {
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
        to: email,
        subject: "Bienvenido a PEDI-VERY ",
        html: `<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <meta name="x-apple-disable-message-reformatting">
            <title></title>
            <style>
                table, td, div, h1, p {font-family: Monserrat, sans-serif;}
            </style>
        </head>
        <body style="margin:0;padding:0;">
            <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
                <tr>
                    <td align="center" style="padding:0;">
                        <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
                            <tr>
                                <td align="center" style="padding:40px 0 30px 0;background: white;">
                                    <img src="https://res.cloudinary.com/dmotjftjo/image/upload/v1678902758/vtdbszo3vphqwqoukdlj.png" alt="" width="300" style="height:auto;display:block;" />
                                </td>
                            </tr>
                            <tr>
                                <td style="padding:36px 30px 42px 30px;">
                                    <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                                        <tr>
                                            <td style="padding:0 0 36px 0;color:#153643;">
                                                <h1 style="font-size:24px;margin:0 0 20px 0;color:#ff441f">Bienvenidos a PEDI-VERY ${firstname} ${lastname}</h1>
                                                <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;">Te damos la bienvenida a PEDI-VERY, Pedí lo que quieras! Restaurantes, mercados, farmacias, kioscos y mucho más.</p>
                                                <p style="margin:0;font-size:16px;line-height:24px"><a href="https://pf-henry-two.vercel.app/login" style="color:#ff441f;text-decoration:underline;">Ingresa ahora</a></p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <td style="padding:30px;background:#ff441f;">
                                <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                        <tr>
                  <td style="padding:0;width:50%;" align="left">
                    <p style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;">
                      &reg; PEDI-VERY, Latinoamerica 2023<br />
                    </p>
                  </td>
                  <td style="padding:0;width:50%;" align="right">
                    <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                      <tr>
                        <td style="padding:0 0 0 10px;width:38px;">
                          <a href="http://www.twitter.com/" style="color:#ffffff;"><img src="https://assets.codepen.io/210284/tw_1.png" alt="Twitter" width="38" style="height:auto;display:block;border:0;" /></a>
                        </td>
                        <td style="padding:0 0 0 10px;width:38px;">
                          <a href="http://www.facebook.com/" style="color:#ffffff;"><img src="https://assets.codepen.io/210284/fb_1.png" alt="Facebook" width="38" style="height:auto;display:block;border:0;" /></a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html> `
    }
    
    const transport = nodemailer.createTransport(config);
    
    const info = await transport.sendMail(mensaje);
    
    

}


module.exports = sendMailWelcome;