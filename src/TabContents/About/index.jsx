import React, { useState } from 'react';
import { 
    Avatar1, Avatar2, Avatar3, Avatar4, 
    LogoColor1, LogoColor2, LogoColor3, LogoColor4, LogoColor5, LogoColor6, 
    IconApp, IconDesign, IconDev, IconPhoto, IconQuote, IconProblemSolving,
} from '../../assets';
import { FaTimes } from 'react-icons/fa';
import Data from './data.json';

const ServiceImages = {
    'web-design': IconDesign,
    'web-development': IconDev,
    'mobile-apps': IconApp,
    'problem-solving': IconProblemSolving,
    'photography': IconPhoto,
};

const TestimonialImages = {
    'user1': Avatar1,
    'user2': Avatar2,
    'user3': Avatar3,
    'user4': Avatar4,
};

const ClientImages = {
    'client1': LogoColor1,
    'client2': LogoColor2,
    'client3': LogoColor3,
    'client4': LogoColor4,
    'client5': LogoColor5,
    'client6': LogoColor6,
};

export default function About() {
    const [popupVisible, setPopupVisible] = useState(false);
    const [itemToPreview, setItemToPreview] = useState(null);

    const closePopup = () => {
        setPopupVisible(false);
    }

    const showPopup = () => {
        setPopupVisible(true);
    }

    const handleTestimonialClicked = (item) => {
        setItemToPreview(item);
        showPopup();
    }

    const renderPopup = () => {
        if (!popupVisible) return null;
        return (
            <div className="modal-container active">
                <div className="overlay active" onClick={closePopup} />
                <section className="modal-body">
                    <button className="modal-close-btn" onClick={closePopup}>
                        <FaTimes />
                    </button>
                    <div className="modal-img-wrapper">
                        <figure className="modal-avatar-box">
                            <img src={TestimonialImages[itemToPreview.key]} alt={itemToPreview.name} width="80" />
                        </figure>
                        <img src={IconQuote} alt="quote icon" />
                    </div>
                    <div className="modal-content">
                        <h4 className="h3 modal-title">{itemToPreview.name}</h4>
                        <time datetime={itemToPreview.time}>{itemToPreview.time}</time>
                        <div>
                            <p>{itemToPreview.message}</p>
                        </div>
                    </div>
                </section>

            </div>
        )
    }

    const renderServiceItem = (item) => {
        return (
            <li className="service-item" key={item.key}>
                <div className="service-icon-box">
                    <img src={ServiceImages[item.key]}alt={item.title} width="40" />
                </div>
                <div className="service-content-box">
                    <h4 className="h4 service-item-title">{item.title}</h4>
                    <p className="service-item-text">{item.description}</p>
                </div>
            </li>
        )
    }

    const renderTestimonialItem = (item) => {
        return (
            <li className="testimonials-item" key={item.key} onClick={() => handleTestimonialClicked(item)}>
                <div className="content-card">
                    <figure className="testimonials-avatar-box">
                        <img src={TestimonialImages[item.key]} alt={item.name} width="60" />
                    </figure>
                    <h4 className="h4 testimonials-item-title">{item.name}</h4>
                    <div className="testimonials-text">
                        <p>{item.message}</p>
                    </div>

                </div>
            </li>
        )
    }
    
    const renderClientItem = (item) => {
        return (
            <li className="clients-item" key={item.key}>
                <a href={item.link}>
                    <img src={ClientImages[item.key]} alt="client logo" />
                </a>
            </li>
        )
    }
        
    return (
        <article className="about" >

            <header>
                <h2 className="h2 article-title">{Data.title}</h2>
            </header>

            <section className="about-text">
                <p>
                    I'm Creative Web Developer with 40 months experience in creating cutting edge Websites for eight
                    persons by creating over 300,000 Lines of Code as a consequence of over 7,400 hours of hard work
                    in the programming of 18 projects implemented by six programming Languages during study and
                    real works. In addition, 280 hours as a Team Leader for study projects.
                </p>

                <p>
                    Core competencies include Front-End Development (HTML, CSS, JavaScript and React JS), Back-End
                    Development (Python and Django Framework), REST API Framework, GraphQL, Versioning Control
                    Systems (Git), Docker Containerization, Unit Testing, System Analysis, Software Design, UI/UX
                    Design, and TeamWork.
                </p>
            </section>


            <section className="service">
                <h3 className="h3 service-title">{Data.services.title}</h3>
                <ul className="service-list">
                    {Data.services.items.map(item => renderServiceItem(item))}
                </ul>
            </section>

            <section className="testimonials">
                <h3 className="h3 testimonials-title">{Data.testimonials.title}</h3>
                <ul className="testimonials-list has-scrollbar">
                    {Data.testimonials.items.map(item => renderTestimonialItem(item))}
                </ul>
            </section>

            <section className="clients">
                <h3 className="h3 clients-title">{Data.clients.title}</h3>
                <ul className="clients-list has-scrollbar">
                    {Data.clients.items.map(item => renderClientItem(item))}
                </ul>
            </section>

            {renderPopup()}
        </article>
    )
}
