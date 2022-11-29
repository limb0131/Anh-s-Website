import "./ContactForm.css";
import React, { useState } from "react";
import { send } from "emailjs-com";

function ContactForm() {
  const [sender_name, setSenderName] = useState("");
  const [sender_email, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    setSenderName(e.target.value);
  };

  const handleEmail = (e) => {
    setSenderEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendMail = (e) => {
    e.preventDefault();
    send(
      "Service_ID",
      "Template_ID",
      { sender_name, sender_email, message },
      "Public Key"
    )
      .then((response) => {
        console.log(
          "Message sent successfully",
          response.status,
          response.text
        );
      })
      .catch((err) => {
        console.log("Failed", err);
      });
    setSenderName("");
    setSenderEmail("");
    setMessage("");
  };

  return (
    <div className="contact-form">
      <div className="contact-container">
        <h1 className="contact-msg">
          <span>
            Contact Us
            <i className="fa-solid fa-paper-plane" />
          </span>
        </h1>
        <form className="contact-info" onSubmit={sendMail}>
          <div className="info">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="sender_name"
              value={sender_name}
              onChange={handleName}
              required
              placeholder="Your name"
            />
          </div>
          <div className="info">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="sender_email"
              value={sender_email}
              onChange={handleEmail}
              required
              placeholder="Your email"
            />
          </div>
          <div className="info">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              value={message}
              onChange={handleMessage}
              required
              placeholder="Message"
            />
          </div>
          <div className="info">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
