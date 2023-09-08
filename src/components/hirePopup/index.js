import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { MyAvatarLabtop } from '../../assets';
import './style.css';
import Data from './data.json';

export default function HirePopup(props) {
  const {visible = false, onOk = () => {}, goToTab = () => {}} = props;

  const renderFooterButtons = () => {
    const data = Data.freelance.links.map((btn) => {
      return (
        <button key={btn.key} className={`btn ${btn.class}`}>
          <a href={btn.link} target='_blank' rel='noopener noreferrer'>
            {btn.label}
          </a>
        </button>
      );
    });
    return <div className='buttons'>{data}</div>;
  };

  return (
    <div className={`hire-popup modal-container ${visible ? 'active' : ''}`}>
      <div className={`overlay ${visible ? 'active' : ''}`} onClick={onOk} />
      <section className="modal-body">
        <button className="modal-close-btn" onClick={onOk}>
            <FaTimes />
        </button>
        <div className='modal-content-container'>
          <div class='img-container'>
            <img src={MyAvatarLabtop} alt="Logo" />
          </div>
          <h1>{Data.title}</h1>
          <p>{Data.description}</p>
        </div>
        <div className='footer'>
          {renderFooterButtons()}
          <p>
          {Data.contctText} 
          <span 
            className='link' 
            onClick={() => { 
              goToTab('contact');
              onOk();
            }}
          >here.</span></p>
        </div>
      </section>
    </div>
  );
}
