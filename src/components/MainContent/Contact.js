import React from 'react';  
import './Contact.css';  

const Contact = () => {  
  return (  
    <div className="contact-container">  
      <h1>Contact Us</h1>  
      <p>Feel free to reach out with any questions or concerns!</p>  
      <form>  
        <input type="text" placeholder="Your Name" />  
        <input type="email" placeholder="Your Email" />  
        <textarea placeholder="Your Message"></textarea>  
        <button type="submit">Send Message</button>  
      </form>  
    </div>  
  );  
};  

export default Contact;