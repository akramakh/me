import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './style.css';

export default function PortfolioPreviewPopup(props) {
  const {item, visible = false, onOk = () => {}, goToTab = () => {}} = props;

  return (
    <div className={`preview-popup modal-container ${visible ? 'active' : ''}`}>
      <div className={`overlay ${visible ? 'active' : ''}`} onClick={onOk} />
      <section className="modal-body">
        <button className="modal-close-btn" onClick={onOk}>
            <FaTimes />
        </button>
        <div className='modal-header'>
          <h1>{item.title}</h1>
          <span>{item.category}</span>
        </div>
        <div className='modal-content-container'>
          <div class='img-container'>
            <img src={item.image} alt="Image" />
          </div>
          <p>{item.description4}</p>
        </div>
        
      </section>
    </div>
  );
}
