import React from 'react';
import './Display.css';

const Display = (props) => {
  return (
    <div className="display">
      <div className="box">
        <p>First name: <span>{props.firstname}</span></p>
      </div>
      <div className="box">
      <p>Last name: <span>{props.lastname}</span></p>
      </div>
      <div className="box">
      <p>Phone: <span>{props.phone}</span></p>
      </div>
      <div className="box">
      <p>Role: <span>{props.role}</span></p>
      </div>
      <div className="box">
      <p>Message: <span>{props.msg}</span></p>
      </div>
    </div>
  );
};

export default Display;