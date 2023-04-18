import React from 'react';
import './Display.css';

const Display = () => {
  return (
    <div className="display">
      <div className="box">
        <p>First name:</p>
      </div>
      <div className="box">
      <p>Last name:</p>
      </div>
      <div className="box">
      <p>Phone number:</p>
      </div>
      <div className="box">
      <p>Role:</p>
      </div>
      <div className="box">
      <p>Message:</p>
      </div>
    </div>
  );
};

export default Display;