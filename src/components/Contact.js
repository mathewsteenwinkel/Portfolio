import React from "react";
import "./Contact.scss"

export default function Contact() {
  return (
    <>
      <header>
        <h1 id="contactMe" smooth className="contactTtl">Send me a message</h1>
      </header>
      <div className="contactForm">
        <form>
          <div className="row">

            <div className="inputGroup">
              <input type="text" id="name" required />
              <label htmlFor="name">Your Name</label>
            </div>

            <div className="inputGroup">
              <input type="text" id="number" required />
              <label htmlFor="number">Phone no.</label>
            </div>
          </div>

          <div className="inputGroup">
            <input type="email" id="email" required />
            <label htmlFor="email">Email</label>
          </div>

          <div className="inputGroup">
            <textarea id="message" rows={8} required placeholder="Your Message" ></textarea>
            <label For="message"></label>

          </div>
          <button type="submit"> SUBMIT</button>
        </form>
      </div>
    </>
  );
}