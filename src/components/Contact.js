import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://secret-atoll-63693-f79a45670cae.herokuapp.com/send', formData);
            setShowModal(true); // Show the modal on success
            setFormData({ name: '', email: '', message: '' }); // Optionally, reset the form
        } catch (error) {
            console.error('Error sending message:', error);
            // Optionally, handle the error (e.g., show an error message)
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const Modal = ({ onClose }) => (
        <div id="contact-modal">
        <div className="modal-overlay">
            <div className="modal-content">
                <p>Message sent successfully!</p>
                <button class="submit-button" onClick={onClose}>Close</button>
            </div>
        </div>
        </div>
    );

    return (
        <section id="contact">
            <h1 className="section-title" style={{ color: "black", fontSize: "25px" }}>
                <span className="text-black" style={{ textAlign: "center" }}>
                    CONTACT ME
                </span>
            </h1>
            <div className="contact-section">
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
            {showModal && <Modal onClose={() => setShowModal(false)} />}
        </section>
    );
}

export default Contact;
