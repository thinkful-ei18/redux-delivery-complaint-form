import React from 'react';

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Report a problem with your delivery</h1>
        </header>
        <main>
          <form>
          <label htmlFor="">Tracking Number</label>
          <input type="text"/>
          </form>
        </main>
      </div>
    );
  }
}