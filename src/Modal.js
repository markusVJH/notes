import React from 'react';
import './Modal.css'

const Modal = (props) => {
  return (
    <div className="overlay">
      <div className="modal">
      <div className="displaybox">
        <p>First name: <span>{props.firstname}</span></p>
      </div>
      <div className="displaybox">
      <p>Last name: <span>{props.lastname}</span></p>
      </div>
      <div className="displaybox">
      <p>Phone: <span>{props.phone}</span></p>
      </div>
      <div className="displaybox">
      <p>Role: <span>{props.role}</span></p>
      </div>
      <div className="displaybox">
      <p>Message: <span>{props.msg}</span></p>
      </div>
        <div className="buttons">
        <button className="send" onClick={props.submit}>Send message</button>
        <button className="not" onClick={props.click}>No, don't send!</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;