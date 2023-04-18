import React from 'react';
import './Modal.css'

const Modal = () => {
  return (
    <div className="overlay">
      <div className="modal">
      <div className="displaybox">
        <p>First name:</p>
      </div>
      <div className="displaybox">
      <p>Last name:</p>
      </div>
      <div className="displaybox">
      <p>Phone number:</p>
      </div>
      <div className="displaybox">
      <p>Role:</p>
      </div>
      <div className="displaybox">
      <p>Message:</p>
      </div>
        <div className="buttons">
        <button className="send">Send message</button>
        <button className="not">No, don't send!</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;