import React, { useState } from 'react';
import "./Form.css";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "6a6d8801-0088-46b5-850b-97777dff1658");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Enquiry submitted successfully!");
        event.target.reset();
      } else {
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An unexpected error occurred.");
    }
  };

  return (
    <div >
      {/* <form onSubmit={onSubmit}>
        <input type="text" name="name" required placeholder="Your Name" />
        <input type="email" name="email" required placeholder="Your Email" />
        <input type="number" name="phone" required placeholder="Your Phone" />
        <textarea name="message" required placeholder="Your Message"></textarea>
        <button type="submit">Submit Form</button>
      </form> */}
{/* <div className="contact-form"> */}
<form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          required 
          placeholder="Your Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Email</label>
        <input
          type="text"
          name="email"
          required 
          placeholder="Your Email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          required 
          placeholder="Your Phone"
        />
      </div>

      {/* Add other form fields similarly */}
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          required   

        ></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
    
      
      {result && <span>{result}</span>}
      {/* </div> */}
    </div>
  );
}
