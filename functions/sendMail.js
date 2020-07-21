require("dotenv").config()
const nodemailer = require("nodemailer")
const { MAIL_LOGIN, MAIL_PASSWORD } = process.env
exports.handler = function (event, context, callback) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: MAIL_LOGIN,
      pass: MAIL_PASSWORD,
    },
  })
  const { email, subject, message } = JSON.parse(event.body)
  transporter.sendMail(
    {
      from: MAIL_LOGIN,
      to: email,
      subject: subject,
      to: MAIL_LOGIN,
      subject: `${subject} | ${email}`,
      text: message,
    },
    function (error, info) {
      if (error) {
        callback(error)
      } else {
        callback(null, {
          statusCode: 200,
          body: "Ok",
        })
        transporter.sendMail(
          {
            from: MAIL_LOGIN,
            to: email,
            subject: "Thanks for contacting me.",
            text: "I have recieved your message. I will get back to you soon.",
          },
          function (error, info) {
            if (error) {
              callback(error)
            } else {
              callback(null, {
                statusCode: 200,
                body: "Ok",
              })
            }
          }
        )
      }
    }
  )