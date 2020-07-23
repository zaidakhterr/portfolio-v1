import React, { useState, useEffect, useCallback } from "react"
import * as EmailValidator from "email-validator"

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

  // useEffect(() => {
  //   if (nameError || emailError || subjectError || messageError) setError(true)
  //   else setError(false)
  // }, [nameError, emailError, subjectError, messageError])

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
  ])

  const handleSubmit = e => {
    e.preventDefault()
    console.log("Submit", name, email, subject, message)
    if (!hasErrors()) {
      console.log("No Errors")
    }
  }

  return (
    <div>
      <div className="section-heading">
        <h2>Contact Me</h2>
        <span></span>
      </div>
      <p className="section-description">
        Discuss a project or just want to say hi? My inbox is open for all.
      </p>
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
        <button type="submit" className="btn">
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact
