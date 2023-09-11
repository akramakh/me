import React from 'react';
import './style.css';

export default function Loader({size='medium'}) {
  return (
    <div className={`loader ${size}`}>
        <div className="jumping-dots-loader"> 
            <span /> 
            <span /> 
            <span /> 
        </div>
        <div className="moving-gradient" />
    </div>
  )
}
