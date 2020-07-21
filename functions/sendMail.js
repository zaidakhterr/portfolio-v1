require("dotenv").config()
const path = require("path")
const nodemailer = require("nodemailer")
const hbs = require("nodemailer-express-handlebars")

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

  let handlebarsOptions = {
    viewEngine: {
      extName: ".html",
      partialsDir: "./templates/",
      layoutsDir: "./templates/",
      defaultLayout: "",
    },
    viewPath: path.resolve("./templates/"),
    extName: ".html",
  }

  transporter.use("compile", hbs(handlebarsOptions))

  const { name, email, subject, message } = JSON.parse(event.body)

  transporter.sendMail(
    {
      from: MAIL_LOGIN,
      to: MAIL_LOGIN,
      subject: `${subject} | ${email}`,
      text: message,
    },
    function (error, info) {
      if (error) {
        callback(error)
      } else {
        transporter.sendMail(
          {
            from: MAIL_LOGIN,
            to: email,
            subject: "Thanks for contacting me.",
            template: "thankYouEmail",
            context: { name },
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
