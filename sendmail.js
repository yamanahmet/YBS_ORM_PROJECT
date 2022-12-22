function sendMailOperation(mailadress){
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: 'test@gmail.com', //You should mail
        pass: 'PASSWORD' //You should "Google Uygulama Şifreleri" password
        }
    });
    
    var mailOptions = {
        from: 'test@gmail.com', //You should mail
        to: mailadress,
        subject: 'Test Mail Subject',
        text: 'Test!'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        } else {
        console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = {
    sendMailOperation
  }
