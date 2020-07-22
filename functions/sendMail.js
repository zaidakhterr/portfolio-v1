const nodemailer = require("nodemailer")

const { MAIL_LOGIN, MAIL_PASSWORD } = process.env

exports.handler = function (event, context, callback) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: MAIL_LOGIN,
      pass: MAIL_PASSWORD,
    },
  })

  const { email, name, message } = JSON.parse(event.body)

  transporter.sendMail(
    {
      from: MAIL_LOGIN,
      to: MAIL_LOGIN,
      subject: `${name} | ${email}`,
      text: `
${message}

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
            subject: "I will get back to you soon.",
            text: `
Hi ${name}, thank you for reaching out to me. I have recieved your message and will be replying soon.

Muhammad Zaid Akhter
            `,
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
