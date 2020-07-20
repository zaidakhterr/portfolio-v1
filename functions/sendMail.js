require("dotenv").config()
require("nodemailer")

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

  const { email, subject, message } = event.body

  transporter.sendMail(
    {
      from: MAIL_LOGIN,
      to: email,
      subject: subject,
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
      }
    }
  )
}
