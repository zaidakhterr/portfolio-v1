import React, { useState, useEffect, useCallback } from "react"
import Fade from "react-reveal/Fade"
import * as EmailValidator from "email-validator"
import axios from "axios"

const useInputError = (state, email = false) => {
  const [dirty, setDirty] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (state.length > 0) {
      setDirty(true)
      setError(false)
    }

    if (state.length === 0 && dirty) setError(true)

    if (email && dirty && !EmailValidator.validate(state)) {
      setError(true)
    }
  }, [state, dirty, email])

  return [error, setError]
}

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const [nameError, setNameError] = useInputError(name)
  const [emailError, setEmailError] = useInputError(email, true)
  const [subjectError, setSubjectError] = useInputError(subject)
  const [messageError, setMessageError] = useInputError(message)

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const resetFields = () => {
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
    setNameError(false)
    setEmailError(false)
    setSubjectError(false)
    setMessageError(false)
  }

  const hasErrors = useCallback(() => {
    if (!nameError && name.length === 0) {
      setNameError(true)
      return true
    }
    if (!emailError && email.length === 0) {
      setEmailError(true)
      return true
    }
    if (!subjectError && subject.length === 0) {
      setSubjectError(true)
      return true
    }
    if (!messageError && message.length === 0) {
      setMessageError(true)
      return true
    }
    return false
  }, [
    name,
    email,
    subject,
    message,
    nameError,
    emailError,
    subjectError,
    messageError,
    setNameError,
    setEmailError,
    setSubjectError,
    setMessageError,
  ])

  const handleSubmit = async e => {
    e.preventDefault()

    if (!hasErrors()) {
      try {
        setLoading(true)
        setError(false)
        await axios.post(
          "https://zaidakhterr.netlify.app/.netlify/functions/sendMail",
          { name, email, subject, message },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        setLoading(false)
        resetFields()
      } catch (err) {
        console.log(err)
        setLoading(false)
        setError(true)
      }
    }
  }

  return (
    <>
      <div className="section-heading">
        <Fade left>
          <h2>Contact Me</h2>
        </Fade>
        <span></span>
      </div>
      <Fade>
        <p className="section-description">
          Discuss a project or just want to say hi? My inbox is open for all.
        </p>
      </Fade>
      <Fade bottom distance="128px">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              className={`${nameError ? "input-error" : ""}`}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className={`${emailError ? "input-error" : ""}`}
            />
          </div>
          <div className="input-group">
            <label htmlFor="subject">Subject</label>
            <input
              autoComplete="off"
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              className={`${subjectError ? "input-error" : ""}`}
            />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              className={`${messageError ? "input-error" : ""}`}
            />
          </div>
          <button disabled={loading} type="submit" className="btn">
            {loading ? "..." : "Send"}
          </button>
          {error && (
            <div className="error-div">
              Oops there was some problem. Please try to send message again by
              clicking <a href="mailto:zaidakhter1202@gmail.com">here</a>.
            </div>
          )}
        </form>
      </Fade>
    </>
  )
}

export default Contact
