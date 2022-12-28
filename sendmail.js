function sendMailOperation(mailadress){
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: 'temp@gmail.com', //You must enter your mail
        pass: 'PASSWORD' //You You must enter your password
        }
    });
    
    var mailOptions = {
        from: 'temp@gmail.com', //You must enter your mail
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
