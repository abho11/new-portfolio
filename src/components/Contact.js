import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://secret-atoll-63693-f79a45670cae.herokuapp.com/send', formData);
            console.log('Message sent:', response.data);
            // Optionally, add logic to handle form success (like showing a success message)
        } catch (error) {
            console.error('Error sending message:', error);
            // Optionally, add logic to handle form error (like showing an error message)
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact">
            <h1  className="section-title" style={{ color: "black" , fontSize: "25px" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                CONTACT
              </span>
            </h1>
            <div  className="contact-section">
            <p className="contact-description">Feel free to reach out for collaborations or just a friendly hello!</p>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="form-control"
                    required
                />
                </div>
                <button type="submit" className="submit-button">Send Message</button>
            </form>
            </div>
        </section>
    );

}

export default Contact;
