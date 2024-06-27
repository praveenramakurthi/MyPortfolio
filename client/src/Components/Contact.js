import React, { useState } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            to_name: 'Praveen Kumar', // Ensure this matches the {{to_name}} in your template
            from_email: email,
            message: message
        };

        emailjs.send('service_8uy0lh4', 'template_t81lqz8', templateParams, 'SXj9vcFjKIooMK-e_')
            .then((response) => {
                // console.log('SUCCESS!', response.status, response.text);
                setName('');
                setEmail('');
                setMessage('');
                alert('Message sent successfully!');
            }, (err) => {
                // console.log('FAILED...', err);
                alert('Failed to send message. Please try again.');
            });
    };
    return (
        <section id="contact">
            <div className="contact-content">
                <h2>Contact Me</h2>
                <p>Have a question or want to work together? Send me a message!</p>
                <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn">Send Message</button>
                    </div>
                </form>
            </div >
        </section >
    );
};

export default Contact;
