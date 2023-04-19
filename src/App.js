import React, { Component } from 'react';
import './App.css'
import Form from './Form';
import Display from './Display';
import Modal from './Modal';

class App extends Component {
  state = {
    showModal: false,
    firstname: "",
    lastname: "",
    phone: "",
    role: "",
    msg: "",
  }

displayHandler = event => {
  this.setState({
    [event.target.name]: event.target.value,
  });
};

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
        <Form submit={this.modalHandler} change={this.displayHandler}/> 
        </div>
        <div className="displayarea">
        <Display 
        firstname={this.state.firstname}
        lastname={this.state.lastname}
        phone={this.state.phone}
        role={this.state.role}
        msg={this.state.msg}/> 
        </div>
        {this.state.showModal && <Modal click={this.modalHandler}
        firstname={this.state.firstname}
        lastname={this.state.lastname}
        phone={this.state.phone}
        role={this.state.role}
        msg={this.state.msg}/>}
      </div>
    );
  }
}

export default App;