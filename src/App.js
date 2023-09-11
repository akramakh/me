import React, { useState, useEffect } from 'react';
import { 
  FaFacebook, FaInstagram, FaGithub, FaTwitter,
  FaMobileAlt, FaRegEnvelope, FaRegCalendarAlt, FaMapMarkerAlt,
  FaChevronDown, FaLinkedin,
} from 'react-icons/fa'
import { 
  MyAvatar,
} from './assets';
import {
  AboutTabContent, ResumeTabContent, PortfolioTabContent, BlogTabContent, ContactTabContent,
} from './TabContents';
import { HirePopup } from './components';
import './App.css';

const App = () => {

  const [activePage, setActivePage] = useState('about');
  const [mobSidebarVisible, setMobSidebarVisible] = useState(false);
  const [hierPopupVisible, setHierPopupVisible] = useState(false);

  useEffect(() => {
    setMobSidebarVisible(false);
    if (window) {
      window.scrollTo(0, 0);
    }
    return () => {
    }
  }, [activePage]);

  const renderActivePage = () => {
    switch (activePage) {
      case 'about':
        return <AboutTabContent />;
    
      case 'resume':
        return <ResumeTabContent />;
    
      case 'portfolio':
        return <PortfolioTabContent />;
    
      case 'blog':
        return <BlogTabContent />;
    
      case 'contact':
        return <ContactTabContent />;
    
      default:
        return <AboutTabContent />;
    }
  }

  const renderNav = () => {
    const links = [
      {
        key: 'about',
        lable: 'About',
      },
      {
        key: 'resume',
        lable: 'Resume',
      },
      {
        key: 'portfolio',
        lable: 'Portfolio',
      },
      // {
      //   key: 'blog',
      //   lable: 'Blog',
      // },
      {
        key: 'contact',
        lable: 'Contact',
      },
    ];

    const data = links.map(link => {
      const isActive = link.key === activePage;
      return (
        <li className="navbar-item" key={link.key}>
          <button className={`navbar-link ${isActive ? 'active' : ''}`} onClick={() => {setActivePage(link.key)}}>{link.lable}</button>
        </li>
      )
    });

    return (
      <nav className="navbar">
        <ul className="navbar-list">
          {data}
          <li className="navbar-item" key='hire-me'>
            <button className={`navbar-link action`} onClick={() => setHierPopupVisible(true)}>Hire Me</button>
          </li>
        </ul>
      </nav>
    )
  }

  return (
    <main>

    <aside className={`sidebar ${mobSidebarVisible ? 'active' : ''}`} data-sidebar>

      <div className="sidebar-info">

        <figure className="avatar-box">
          <img src={MyAvatar} alt="Akram AKh" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Akram AKh">Akram Khousa</h1>

          <p className="title">Software Engineer</p>
        </div>

        <button className="info_more-btn" onClick={() => setMobSidebarVisible(!mobSidebarVisible)}>
          <span>Show Contacts</span>
          <FaChevronDown />
        </button>

      </div>

      <div className="sidebar-info_more">

        <div className="separator"></div>

        <ul className="contacts-list">

          <li className="contact-item">

            <div className="icon-box">
              <FaRegEnvelope />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:akram.khousa@gmail,com" className="contact-link">akram.khousa@gmail,com</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <FaMobileAlt />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+970595527040" className="contact-link">+970 (595) 527-040</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <FaRegCalendarAlt />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time datetime="1997-06-03">June 03, 1997</time>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <FaMapMarkerAlt />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Gaza, Palestine</address>
            </div>

          </li>

        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          
          <li className="social-item">
            <a href="https://www.linkedin.com/in/akramabukhousa/" className="social-link">
              <FaLinkedin />
            </a>
          </li>
          
          <li className="social-item">
            <a href="https://www.github.com/akramakh" className="social-link">
              <FaGithub />
            </a>
          </li>

          <li className="social-item">
            <a href="https://www.facebook.com/AkramAbuKhousa" className="social-link">
              <FaFacebook />
            </a>
          </li>

          <li className="social-item">
            <a href="https://www.twitter.com/akram_a_kh" className="social-link">
              <FaTwitter />
            </a>
          </li>

          <li className="social-item">
            <a href="https://www.instagram.com/akram.akh" className="social-link">
              <FaInstagram />
            </a>
          </li>

        </ul>

      </div>

    </aside>

    <div className="main-content">

      {renderNav()}

      {renderActivePage()}

    </div>

    <HirePopup
      visible={hierPopupVisible}
      onOk={() => setHierPopupVisible(false)}
      goToTab={(tab) => setActivePage(tab)}
    />

  </main>
  )

}

export default App;
