import React, { useState } from 'react';
import { 
  FaFacebook, FaInstagram, FaGithub, FaTwitter,
  FaMobileAlt, FaRegEnvelope, FaRegCalendarAlt, FaMapMarkerAlt,
  FaGraduationCap, FaCertificate, FaChevronDown, FaRegEye,
} from 'react-icons/fa'
import { 
  MyAvatar, Logo, 
  Avatar1, Avatar2, Avatar3, Avatar4, 
  Blog1, Blog2, Blog3, Blog4, Blog5, Blog6, 
  LogoColor1, LogoColor2, LogoColor3, LogoColor4, LogoColor5, LogoColor6, 
  Project1, Project2, Project3, Project4, Project5, Project6, Project7, Project8, Project9, 
  IconApp, IconDesign, IconDev, IconPhoto, IconQuote 
} from './assets';
import './App.css';

const App = () => {

  const [activePage, setActivePage] = useState('about');

  const renderActivePage = () => {
    if (activePage === 'about') {
      return (
        <article className="about  active" data-page="about">

          <header>
            <h2 className="h2 article-title">About me</h2>
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

            <h3 className="h3 service-title">What i'm doing</h3>

            <ul className="service-list">

              <li className="service-item">

                <div className="service-icon-box">
                  <img src={IconDesign}alt="design icon" width="40" />
                </div>

                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Web design</h4>

                  <p className="service-item-text">
                    The most modern and high-quality design made at a professional level.
                  </p>
                </div>

              </li>

              <li className="service-item">

                <div className="service-icon-box">
                  <img src={IconDev} alt="Web development icon" width="40" />
                </div>

                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Web development</h4>

                  <p className="service-item-text">
                    High-quality development of sites at the professional level.
                  </p>
                </div>

              </li>

              <li className="service-item">

                <div className="service-icon-box">
                  <img src={IconApp} alt="mobile app icon" width="40" />
                </div>

                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Mobile apps</h4>

                  <p className="service-item-text">
                    Professional development of applications for iOS and Android.
                  </p>
                </div>

              </li>

              <li className="service-item">

                <div className="service-icon-box">
                  <img src={IconPhoto} alt="camera icon" width="40" />
                </div>

                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Photography</h4>

                  <p className="service-item-text">
                    I make high-quality photos of any category at a professional level.
                  </p>
                </div>

              </li>

            </ul>

          </section>

          <section className="testimonials">

            <h3 className="h3 testimonials-title">Testimonials</h3>

            <ul className="testimonials-list has-scrollbar">

              <li className="testimonials-item">
                <div className="content-card" data-testimonials-item>

                  <figure className="testimonials-avatar-box">
                    <img src={Avatar1} alt="Daniel lewis" width="60" data-testimonials-avatar />
                  </figure>

                  <h4 className="h4 testimonials-item-title" data-testimonials-title>Daniel lewis</h4>

                  <div className="testimonials-text" data-testimonials-text>
                    <p>
                      Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                      lot of experience
                      and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                      consectetur adipiscing
                      elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                    </p>
                  </div>

                </div>
              </li>

              <li className="testimonials-item">
                <div className="content-card" data-testimonials-item>

                  <figure className="testimonials-avatar-box">
                    <img src={Avatar2} alt="Jessica miller" width="60" data-testimonials-avatar />
                  </figure>

                  <h4 className="h4 testimonials-item-title" data-testimonials-title>Jessica miller</h4>

                  <div className="testimonials-text" data-testimonials-text>
                    <p>
                      Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                      lot of experience
                      and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                      consectetur adipiscing
                      elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                    </p>
                  </div>

                </div>
              </li>

              <li className="testimonials-item">
                <div className="content-card" data-testimonials-item>

                  <figure className="testimonials-avatar-box">
                    <img src={Avatar3} alt="Emily evans" width="60" data-testimonials-avatar />
                  </figure>

                  <h4 className="h4 testimonials-item-title" data-testimonials-title>Emily evans</h4>

                  <div className="testimonials-text" data-testimonials-text>
                    <p>
                      Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                      lot of experience
                      and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                      consectetur adipiscing
                      elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                    </p>
                  </div>

                </div>
              </li>

              <li className="testimonials-item">
                <div className="content-card" data-testimonials-item>

                  <figure className="testimonials-avatar-box">
                    <img src={Avatar4} alt="Henry william" width="60" data-testimonials-avatar />
                  </figure>

                  <h4 className="h4 testimonials-item-title" data-testimonials-title>Henry william</h4>

                  <div className="testimonials-text" data-testimonials-text>
                    <p>
                      Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                      lot of experience
                      and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                      consectetur adipiscing
                      elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                    </p>
                  </div>

                </div>
              </li>

            </ul>

          </section>



          <div className="modal-container" data-modal-container>

            <div className="overlay" data-overlay></div>

            <section className="testimonials-modal">

              <button className="modal-close-btn" data-modal-close-btn>
                {/* <ion-icon name="close-outline"></ion-icon> */}
              </button>

              <div className="modal-img-wrapper">
                <figure className="modal-avatar-box">
                  <img src={Avatar1} alt="Daniel lewis" width="80" data-modal-img />
                </figure>

                <img src={IconQuote} alt="quote icon" />
              </div>

              <div className="modal-content">

                <h4 className="h3 modal-title" data-modal-title>Daniel lewis</h4>

                <time datetime="2021-06-14">14 June, 2021</time>

                <div data-modal-text>
                  <p>
                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                    lot of experience
                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                    consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                  </p>
                </div>

              </div>

            </section>

          </div>


          <section className="clients">

            <h3 className="h3 clients-title">Clients</h3>

            <ul className="clients-list has-scrollbar">

              <li className="clients-item">
                <a href="#">
                  <img src={LogoColor1} alt="client logo" />
                </a>
              </li>

              <li className="clients-item">
                <a href="#">
                  <img src={LogoColor2} alt="client logo" />
                </a>
              </li>

              <li className="clients-item">
                <a href="#">
                  <img src={LogoColor3} alt="client logo" />
                </a>
              </li>

              <li className="clients-item">
                <a href="#">
                  <img src={LogoColor4} alt="client logo" />
                </a>
              </li>

              <li className="clients-item">
                <a href="#">
                  <img src={LogoColor5} alt="client logo" />
                </a>
              </li>

              <li className="clients-item">
                <a href="#">
                  <img src={LogoColor6} alt="client logo" />
                </a>
              </li>

            </ul>

          </section>

        </article>
      )
    }

    if (activePage === 'resume') {
      return (
        <article className="resume" data-page="resume">

          <header>
            <h2 className="h2 article-title">Resume</h2>
          </header>

          <section className="timeline">

            <div className="title-wrapper">
              <div className="icon-box">
                <FaGraduationCap />
              </div>

              <h3 className="h3">Education</h3>
            </div>

            <ol className="timeline-list">

              <li className="timeline-item">

                <h4 className="h4 timeline-item-title">University school of the arts</h4>

                <span>2007 — 2008</span>

                <p className="timeline-text">
                  Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                  quas molestias
                  exceptur.
                </p>

              </li>

              <li className="timeline-item">

                <h4 className="h4 timeline-item-title">New york academy of art</h4>

                <span>2006 — 2007</span>

                <p className="timeline-text">
                  Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est
                  omnis..
                </p>

              </li>

              <li className="timeline-item">

                <h4 className="h4 timeline-item-title">High school of art and design</h4>

                <span>2002 — 2004</span>

                <p className="timeline-text">
                  Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur
                  magni dolores
                  eos.
                </p>

              </li>

            </ol>

          </section>

          <section className="timeline">

            <div className="title-wrapper">
              <div className="icon-box">
                <FaCertificate />
              </div>

              <h3 className="h3">Experience</h3>
            </div>

            <ol className="timeline-list">

              <li className="timeline-item">

                <h4 className="h4 timeline-item-title">Creative director</h4>

                <span>2015 — Present</span>

                <p className="timeline-text">
                  Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas
                  molestias
                  exceptur.
                </p>

              </li>

              <li className="timeline-item">

                <h4 className="h4 timeline-item-title">Art director</h4>

                <span>2013 — 2015</span>

                <p className="timeline-text">
                  Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                  quas molestias
                  exceptur.
                </p>

              </li>

              <li className="timeline-item">

                <h4 className="h4 timeline-item-title">Web designer</h4>

                <span>2010 — 2013</span>

                <p className="timeline-text">
                  Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                  quas molestias
                  exceptur.
                </p>

              </li>

            </ol>

          </section>

          <section className="skill">

            <h3 className="h3 skills-title">My skills</h3>

            <ul className="skills-list content-card">

              <li className="skills-item">

                <div className="title-wrapper">
                  <h5 className="h5">Web design</h5>
                  <data value="80">80%</data>
                </div>

                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{width: "80%"}} />
                </div>

              </li>

              <li className="skills-item">

                <div className="title-wrapper">
                  <h5 className="h5">Graphic design</h5>
                  <data value="70">70%</data>
                </div>

                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{width: "70%"}} />
                </div>

              </li>

              <li className="skills-item">

                <div className="title-wrapper">
                  <h5 className="h5">Branding</h5>
                  <data value="90">90%</data>
                </div>

                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{width: "90%"}} />
                </div>

              </li>

              <li className="skills-item">

                <div className="title-wrapper">
                  <h5 className="h5">WordPress</h5>
                  <data value="50">50%</data>
                </div>

                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{width: "50%"}} />
                </div>

              </li>

            </ul>

          </section>

        </article>
      )
    }

    if (activePage === 'portfolio') {
      return (
        <article className="portfolio" data-page="portfolio">

          <header>
            <h2 className="h2 article-title">Portfolio</h2>
          </header>

          <section className="projects">

            <ul className="filter-list">

              <li className="filter-item">
                <button className="active" data-filter-btn>All</button>
              </li>

              <li className="filter-item">
                <button data-filter-btn>Web design</button>
              </li>

              <li className="filter-item">
                <button data-filter-btn>Applications</button>
              </li>

              <li className="filter-item">
                <button data-filter-btn>Web development</button>
              </li>

            </ul>

            <div className="filter-select-box">

              <button className="filter-select" data-select>

                <div className="select-value" data-selecct-value>Select category</div>

                <div className="select-icon">
                  <FaChevronDown />
                </div>

              </button>

              <ul className="select-list">

                <li className="select-item">
                  <button data-select-item>All</button>
                </li>

                <li className="select-item">
                  <button data-select-item>Web design</button>
                </li>

                <li className="select-item">
                  <button data-select-item>Applications</button>
                </li>

                <li className="select-item">
                  <button data-select-item>Web development</button>
                </li>

              </ul>

            </div>

            <ul className="project-list">

              <li className="project-item  active" data-filter-item data-category="web development">
                <a href="#">

                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <FaRegEye />
                    </div>

                    <img src={Project1} alt="finance" loading="lazy" />
                  </figure>

                  <h3 className="project-title">Finance</h3>

                  <p className="project-category">Web development</p>

                </a>
              </li>

              <li className="project-item  active" data-filter-item data-category="web development">
                <a href="#">

                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <FaRegEye />
                    </div>

                    <img src={Project2} alt="orizon" loading="lazy" />
                  </figure>

                  <h3 className="project-title">Orizon</h3>

                  <p className="project-category">Web development</p>

                </a>
              </li>

              <li className="project-item  active" data-filter-item data-category="web design">
                <a href="#">

                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <FaRegEye />
                    </div>

                    <img src={Project3} alt="fundo" loading="lazy" />
                  </figure>

                  <h3 className="project-title">Fundo</h3>

                  <p className="project-category">Web design</p>

                </a>
              </li>

              <li className="project-item  active" data-filter-item data-category="applications">
                <a href="#">

                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <FaRegEye />
                    </div>

                    <img src={Project4} alt="brawlhalla" loading="lazy" />
                  </figure>

                  <h3 className="project-title">Brawlhalla</h3>

                  <p className="project-category">Applications</p>

                </a>
              </li>

              <li className="project-item  active" data-filter-item data-category="web design">
                <a href="#">

                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <FaRegEye />
                    </div>

                    <img src={Project5} alt="dsm." loading="lazy" />
                  </figure>

                  <h3 className="project-title">DSM.</h3>

                  <p className="project-category">Web design</p>

                </a>
              </li>

              <li className="project-item  active" data-filter-item data-category="web design">
                <a href="#">

                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <FaRegEye />
                    </div>

                    <img src={Project6} alt="metaspark" loading="lazy" />
                  </figure>

                  <h3 className="project-title">MetaSpark</h3>

                  <p className="project-category">Web design</p>

                </a>
              </li>

              <li className="project-item  active" data-filter-item data-category="web development">
                <a href="#">

                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <FaRegEye />
                    </div>

                    <img src={Project7} alt="summary" loading="lazy" />
                  </figure>

                  <h3 className="project-title">Summary</h3>

                  <p className="project-category">Web development</p>

                </a>
              </li>

              <li className="project-item  active" data-filter-item data-category="applications">
                <a href="#">

                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <FaRegEye />
                    </div>

                    <img src={Project8} alt="task manager" loading="lazy" />
                  </figure>

                  <h3 className="project-title">Task Manager</h3>

                  <p className="project-category">Applications</p>

                </a>
              </li>

              <li className="project-item  active" data-filter-item data-category="web development">
                <a href="#">

                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <FaRegEye />
                    </div>

                    <img src={Project9} alt="arrival" loading="lazy" />
                  </figure>

                  <h3 className="project-title">Arrival</h3>

                  <p className="project-category">Web development</p>

                </a>
              </li>

            </ul>

          </section>

        </article>
      )
    }

    if (activePage === 'blog') {
      return (
        <article className="blog" data-page="blog">

          <header>
            <h2 className="h2 article-title">Blog</h2>
          </header>

          <section className="blog-posts">

            <ul className="blog-posts-list">

              <li className="blog-post-item">
                <a href="#">

                  <figure className="blog-banner-box">
                    <img src={Blog1} alt="Design conferences in 2022" loading="lazy" />
                  </figure>

                  <div className="blog-content">

                    <div className="blog-meta">
                      <p className="blog-category">Design</p>

                      <span className="dot"></span>

                      <time datetime="2022-02-23">Fab 23, 2022</time>
                    </div>

                    <h3 className="h3 blog-item-title">Design conferences in 2022</h3>

                    <p className="blog-text">
                      Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                    </p>

                  </div>

                </a>
              </li>

              <li className="blog-post-item">
                <a href="#">

                  <figure className="blog-banner-box">
                    <img src={Blog2} alt="Best fonts every designer" loading="lazy" />
                  </figure>

                  <div className="blog-content">

                    <div className="blog-meta">
                      <p className="blog-category">Design</p>

                      <span className="dot"></span>

                      <time datetime="2022-02-23">Fab 23, 2022</time>
                    </div>

                    <h3 className="h3 blog-item-title">Best fonts every designer</h3>

                    <p className="blog-text">
                      Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.
                    </p>

                  </div>

                </a>
              </li>

              <li className="blog-post-item">
                <a href="#">

                  <figure className="blog-banner-box">
                    <img src={Blog3} alt="Design digest #80" loading="lazy" />
                  </figure>

                  <div className="blog-content">

                    <div className="blog-meta">
                      <p className="blog-category">Design</p>

                      <span className="dot"></span>

                      <time datetime="2022-02-23">Fab 23, 2022</time>
                    </div>

                    <h3 className="h3 blog-item-title">Design digest #80</h3>

                    <p className="blog-text">
                      Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.
                    </p>

                  </div>

                </a>
              </li>

              <li className="blog-post-item">
                <a href="#">

                  <figure className="blog-banner-box">
                    <img src={Blog4} alt="UI interactions of the week" loading="lazy" />
                  </figure>

                  <div className="blog-content">

                    <div className="blog-meta">
                      <p className="blog-category">Design</p>

                      <span className="dot"></span>

                      <time datetime="2022-02-23">Fab 23, 2022</time>
                    </div>

                    <h3 className="h3 blog-item-title">UI interactions of the week</h3>

                    <p className="blog-text">
                      Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.
                    </p>

                  </div>

                </a>
              </li>

              <li className="blog-post-item">
                <a href="#">

                  <figure className="blog-banner-box">
                    <img src={Blog5} alt="The forgotten art of spacing" loading="lazy" />
                  </figure>

                  <div className="blog-content">

                    <div className="blog-meta">
                      <p className="blog-category">Design</p>

                      <span className="dot"></span>

                      <time datetime="2022-02-23">Fab 23, 2022</time>
                    </div>

                    <h3 className="h3 blog-item-title">The forgotten art of spacing</h3>

                    <p className="blog-text">
                      Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                  </div>

                </a>
              </li>

              <li className="blog-post-item">
                <a href="#">

                  <figure className="blog-banner-box">
                    <img src={Blog6} alt="Design digest #79" loading="lazy" />
                  </figure>

                  <div className="blog-content">

                    <div className="blog-meta">
                      <p className="blog-category">Design</p>

                      <span className="dot"></span>

                      <time datetime="2022-02-23">Fab 23, 2022</time>
                    </div>

                    <h3 className="h3 blog-item-title">Design digest #79</h3>

                    <p className="blog-text">
                      Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.
                    </p>

                  </div>

                </a>
              </li>

            </ul>

          </section>

        </article>
      )
    }

    if (activePage === 'contact') {
      return (
        <article className="contact" data-page="contact">

          <header>
            <h2 className="h2 article-title">Contact</h2>
          </header>

          <section className="mapbox" data-mapbox>
            <figure>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3270.9205239262587!2d34.45966549986266!3d31.533357741453973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1693049432930!5m2!1sen!2s" 
                width="400" height="300" loading="lazy"></iframe>
            </figure>
          </section>

          <section className="contact-form">

            <h3 className="h3 form-title">Contact Form</h3>

            <form action="#" className="form" data-form>

              <div className="input-wrapper">
                <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />

                <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
              </div>

              <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

              <button className="form-btn" type="submit" disabled data-form-btn>
                {/* <ion-icon name="paper-plane"></ion-icon> */}
                <span>Send Message</span>
              </button>

            </form>

          </section>

        </article>
      )
    }
  }

  const renderNav = () => {
    const links = [
      {
        key: 'about',
        lable: 'About',
      },
      // {
      //   key: 'resume',
      //   lable: 'Resume',
      // },
      // {
      //   key: 'portfolio',
      //   lable: 'Portfolio',
      // },
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
        </ul>
      </nav>
    )
  }

  return (
    <main>

    <aside className="sidebar" data-sidebar>

      <div className="sidebar-info">

        <figure className="avatar-box">
          <img src={MyAvatar} alt="Akram AKh" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Akram AKh">Akram Khousa</h1>

          <p className="title">Software Engineer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          {/* <ion-icon name="chevron-down"></ion-icon> */}
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

  </main>
  )

}

export default App;
