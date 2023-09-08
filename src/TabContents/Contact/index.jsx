import React, { useState, useMemo } from 'react';
import emailjs from 'emailjs-com';
import { FaPaperPlane, FaTimes } from 'react-icons/fa';
import Data from './data.json';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [alert, setAlert] = useState({});
    const WebsiteLink = window ? window.location.href : 'https://github.com/akramakh/me';
    
    const btnDisabled = useMemo(() => !(name && name.trim() && email && email.trim() && message && message.trim()), [name, email, message]);
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setAlert({});
        emailjs.sendForm(
            Data.emailJsConfig.SERVICE_ID, 
            Data.emailJsConfig.TEMPLATE_ID, 
            e.target, 
            Data.emailJsConfig.PUBLIC_KEY
        ).then((result) => {
            setAlert(Data.form.alerts.success);
        }, (error) => {
            setAlert(Data.form.alerts.error);
        });
        e.target.reset();
        setName('');
        setEmail('');
        setMessage('');
    };
    
    const handleValueChanged = (e) => {
        const key = e.target.name;
        if (key === 'from_name') {
            setName(e.target.value);
        } else if (key === 'reply_to') {
            setEmail(e.target.value);
        } else if (key === 'message') {
            setMessage(e.target.value);
        }
        setAlert({});
    }

    return (
        <article className="contact" >

            <header>
                <h2 className="h2 article-title">{Data.title}</h2>
            </header>

            <section className="mapbox" data-mapbox>
                <figure>
                    <iframe 
                        src={Data.map.url} 
                        width="400" height="300" loading="lazy"
                    ></iframe>
                </figure>
            </section>

            <section className="contact-form">
                <h3 className="h3 form-title">{Data.form.title}</h3>
                <form onSubmit={handleOnSubmit} className="form">
                    {alert?.text ? (
                        <div className={`alert ${alert?.type ? alert.type : ''}`}>
                            <div className="content">
                                <h3>{alert.title}</h3>
                                <p>{alert.text}</p>
                            </div>
                            <button className="alert-close-btn" onClick={() => {setAlert({})}}>
                                <FaTimes />
                            </button>
                        </div>
                    ) : null}
                    <div className="input-wrapper">
                        <input 
                            key={Data.form.items[0].key}
                            type="text" 
                            name={Data.form.items[0].name} 
                            className="form-input" 
                            placeholder={Data.form.items[0].placeholder} 
                            onChange={handleValueChanged}
                        />
                        <input 
                            key={Data.form.items[1].name}
                            type="email" 
                            name={Data.form.items[1].name} 
                            className="form-input" 
                            placeholder={Data.form.items[1].placeholder} 
                            onChange={handleValueChanged}
                        />
                    </div>
                    <textarea 
                        key={Data.form.items[2].key}
                        name={Data.form.items[2].name}
                        className="form-input"
                        placeholder={Data.form.items[2].placeholder}
                        onChange={handleValueChanged}
                    >{message}</textarea>
                    <input 
                        key={Data.form.items[3].name}
                        type="hidden" 
                        name={Data.form.items[3].name}
                        value={WebsiteLink}
                    />
                    <button className="form-btn" type="submit" disabled={btnDisabled}>
                        <span>{Data.form.action.label}</span>
                        <FaPaperPlane />
                    </button>
                </form>
            </section>

        </article>
    )
}
