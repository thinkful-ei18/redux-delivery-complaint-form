import React from 'react';
import './contact.css'
export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact-wrapper">
        <header>
          <h1>Report a problem with your delivery</h1>
        </header>
        <main>
          <form onSubmit={(e) => {
            e.preventDefault();
            console.log(e.target.value);
          }}>
            <label> Tracking Number
              <input type="text"/>
            </label>
            <label> What is your issue?
              <select name="issue">
              <option value="missing">My delivery hasn't arrived</option>
              <option value="wrong item">The wrong item was delivered</option>
              <option value="incomplete">Part of my order was missing</option>
              <option value="damaged">Some of my order arrived damaged</option>
              <option value="other">Other (give more details below)</option>
              </select>
            </label>
            <label htmlFor=""> Give more details (optional)
              <textarea name="details" id="details" cols="30" rows="5"></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </main>
      </div>
    );
  }
}