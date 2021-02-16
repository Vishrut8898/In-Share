const nodemailer = require("nodemailer");
module.exports = async ({ to, subject, text, html}) => {
    // let transporter = nodemailer.createTransport({
    //     host: process.env.SMTP_HOST,
    //     port: process.env.SMTP_PORT,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //         user: process.env.MAIL_USER, // generated ethereal user
    //         pass: process.env.MAIL_PASSWORD, // generated ethereal password
    //     },
    // });

    // // send mail with defined transport object
    // let info = await transporter.sendMail({
    //     from: `inShare <${from}>`, // sender address
    //     to: to, // list of receivers
    //     subject: subject, // Subject line
    //     text: text, // plain text body
    //     html: html, // html body
    // });

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'lucifermorningstar9869@outlook.com', // generated ethereal user
            pass: 'dummy@12345'  // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: `Node File Share App <lucifermorningstar9869@outlook.com>`, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        html: html // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        
        console.log('Success Bitches')
    });
}