import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { MyAvatarLabtop } from '../../assets';
import './style.css';
import Data from './data.json';

export default function HirePopup(props) {
  const {visible = false, onOk = () => {}} = props;

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
    return <>{data}</>;
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
        </div>
        <div className='footer'>
          {renderFooterButtons()}
        </div>
      </section>
    </div>
  );
}
