import React, { Component } from 'react';
import './App.css'
import Form from './Form';
import Display from './Display';
import Modal from './Modal';

class App extends Component {
  render() {
    return (
      <div className="page">
        <div className="formarea">
        <Form/> 
        </div>
        <div className="displayarea">
        <Display/> 
        </div>
        <Modal />
      </div>
    );
  }
}

export default App;
