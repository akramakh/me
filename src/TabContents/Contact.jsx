import React, { useState, useMemo } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const btnDisabled = useMemo(() => !(name && name.trim() && email && email.trim() && message && message.trim()), [name, email, message]);

    const handleValueChanged = (e) => {
        const key = e.target.name;
        if (key === 'name') {
            setName(e.target.value);
        } else if (key === 'email') {
            setEmail(e.target.value);
        } else if (key === 'message') {
            setMessage(e.target.value);
        }
    }

    return (
        <article className="contact" >

            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="mapbox" data-mapbox>
                <figure>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3270.9205239262587!2d34.45966549986266!3d31.533357741453973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1693049432930!5m2!1sen!2s" 
                        width="400" height="300" loading="lazy"
                    ></iframe>
                </figure>
            </section>

            <section className="contact-form">
                <h3 className="h3 form-title">Contact Form</h3>
                <form action="#" className="form">
                    <div className="input-wrapper">
                        <input type="text" name="name" className="form-input" placeholder="Full name" onChange={handleValueChanged} />
                        <input type="email" name="email" className="form-input" placeholder="Email address" onChange={handleValueChanged} />
                    </div>
                    <textarea name="message" className="form-input" placeholder="Your Message" onChange={handleValueChanged}>{message}</textarea>
                    <button className="form-btn" type="submit" disabled={btnDisabled}>
                        <span>Send Message</span>
                        <FaPaperPlane />
                    </button>
                </form>
            </section>

        </article>
    )
}
