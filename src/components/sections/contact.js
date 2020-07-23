import React, { useState } from "react"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    console.log("Submit", name, email, subject, message)
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
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
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
          />
        </div>
        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
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
