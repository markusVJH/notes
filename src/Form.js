import React from 'react';
import './Form.css';

const Form = () => {
 
  return (
    <div>
   <form className="form">
    <label for="firstname">First name</label>
    <input type="text" name="firstname"></input>
    <label for="lastname">Last name</label>
    <input type="text" name="lastname"></input>
    <label for="phone">Phone number</label>
    <input type="number" name="phone"></input>
    <label for="role">Choose a role</label>
    <select name="role" id="role">
      <option value="student">Student</option>
      <option value="teacher">Teacher</option>
      <option value="other">Other</option>
    </select>
    <label for="msg">Message</label>
    <textarea name="msg" id="msg"></textarea>
    <button type="submit">Send</button>
   </form>
    </div>
  );
};

export default Form;