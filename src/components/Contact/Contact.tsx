import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Contact () {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "service_09znokc",     
      "template_nhg6i1d",    
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      },
      "2lqSBdGKy16biqAIA"     
    )
    .then(() => {
      alert("Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((err) => {
      console.error("Failed to send message:", err);
      alert("Oops! Something went wrong.");
    });
  }

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          rows={5} 
          value={formData.message} 
          onChange={handleChange} 
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <a href="https://www.linkedin.com/in/david-krstevski-b819a8378/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/Dacho998" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </section>
  );
};
