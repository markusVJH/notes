import React, { Component } from 'react';
import './App.css'
import Form from './Form';
import Display from './Display';
import Modal from './Modal';
import Posts from './Posts';
import axios from 'axios';

class App extends Component {
  state = {
    showModal: false,
    note: {
    firstname: "",
    lastname: "",
    phone: "",
    role: "",
    msg: "",
  },
  data: []
  }
  
  submitHandler = () => {
    axios
      .post('http://localhost:4001/posts/', this.state.note)
      .then((res) => {
        const updatedData = [...this.state.data, res.data];
      this.setState({ data: updatedData })
    })
    .catch((error) => console.log(error));
      this.setState({
        showModal: !this.state.showModal
      })
  }
  componentDidMount () {
  axios.get('http://localhost:4001/posts/').then(res => {
    this.setState({ data: res.data });
  })


/*   fetch('http://localhost:4001/posts/').then(res => res.json()).then(res => {
    this.setState({ data: res });
    console.log(res);
  }) */
}
displayHandler = event => {
  const { name, value } = event.target;
  this.setState(prevState => ({
    note: {
      ...prevState.note,
      [name]: value,
    },
  }));
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
        <div className="upper">
        <div className="formarea">
        <Form submit={this.modalHandler} change={this.displayHandler}/> 
        </div>
        <div className="displayarea">
        <Display {...this.state.note}/> 
        </div>
        <div>
        </div>
        </div>
        <Posts data={this.state.data}/> 
        {this.state.showModal && <Modal submit={this.submitHandler} click={this.modalHandler}
       {...this.state.note}/>}
      </div>
    );
  }
}

export default App;