import React, { Component } from 'react';
import './App.css'
import Form from './Form';
import Display from './Display';
import Modal from './Modal';

class App extends Component {
  state = {
    showModal: false
  }


modalHandler = (e) => {
  e.preventDefault();
  this.setState({
    showModal: !this.state.showModal
  })
};

  render() {
    return (
      <div className="page">
        <div className="formarea">
        <Form submit={this.modalHandler}/> 
        </div>
        <div className="displayarea">
        <Display /> 
        </div>
        {this.state.showModal && <Modal />}
      </div>
    );
  }
}

export default App;