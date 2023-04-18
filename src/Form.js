import React from 'react';
import './Form.css';

const Form = (props) => {
 
  return (
    <div>
   <form onSubmit={props.submit} className="form">
    <label htmlFor="firstname">First name</label>
    <input type="text" name="firstname"></input>
    <label htmlFor="lastname">Last name</label>
    <input type="text" name="lastname"></input>
    <label htmlFor="phone">Phone number</label>
    <input type="number" name="phone"></input>
    <label htmlFor="role">Choose a role</label>
    <select name="role" id="role">
      <option value="student">Student</option>
      <option value="teacher">Teacher</option>
      <option value="other">Other</option>
    </select>
    <label htmlFor="msg">Message</label>
    <textarea name="msg" id="msg"></textarea>
    <button type="submit" >Send</button>
   </form>
    </div>
  );
};

export default Form;