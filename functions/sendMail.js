require("dotenv").config()
const nodemailer = require("nodemailer")

const { MAIL_LOGIN, MAIL_PASSWORD } = process.env

exports.handler = function (event, context, callback) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: MAIL_LOGIN,
      pass: MAIL_PASSWORD,
    },
  })

  const { name, email, message } = JSON.parse(event.body)

  transporter.sendMail(
    {
      from: MAIL_LOGIN,
      to: MAIL_LOGIN,
      subject: `${name} | ${email}`,
      text: `${message}

      Name: ${name}
      Email: ${email}`,
    },
    function (error, info) {
      if (error) {
        callback(error)
      } else {
        transporter.sendMail(
          {
            from: MAIL_LOGIN,
            to: email,
            subject: "I will get back to you soon",
            text: `Hi👋 ${name}, thanks for reaching out to me. I have recieved your message and will be contacting you soon.

            Muhammad Zaid Akhter`,
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
}
