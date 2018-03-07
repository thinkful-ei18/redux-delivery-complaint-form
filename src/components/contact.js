import React from 'react';
import './contact.css';
export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact-wrapper">
        <header>
          <h1>Report a problem with your delivery</h1>
        </header>
        <main>
          <form>
            <label> Tracking Number
              <input type="text"/>
            </label>
            <label> What is your issue?
              <select name="issue">
              <option value="">My delivery hasn't arrived</option>
              <option value="">The wrong item was delivered</option>
              <option value="">Part of my order was missing</option>
              <option value="">Some of my order arrived damaged</option>
              <option value="">Other (give more details below)</option>
              </select>
            </label>
            <label htmlFor=""> Give more details (optional)
              <textarea name="" id="" cols="30" rows="5"></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </main>
      </div>
    );
  }
}