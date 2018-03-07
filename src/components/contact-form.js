import React from 'react';
import './contact-form.css';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import Input from './input';
import { required, nonEmpty, maxNumbers } from  '../validators';

export class ContactForm extends React.Component {

  onSubmit(values) {
    console.log('STRINGIFIED VALUES:',JSON.stringify(values));
    return fetch('https://us-central1-delivery-form-api.cloudfunctions.net/api/report', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
        if (
          res.headers.has('content-type') &&
          res.headers
            .get('content-type')
            .startsWith('application/json')
        ) {
          return res.json().then(err => Promise.reject(err));
        }
        return Promise.reject({
          code: res.status,
          message: res.statusText
      });
      }
      return;
    })
    .then(() => console.log('Submitted form with:', values))
    .catch(err => {
      const {reason, message, location} = err;
      if (reason === 'ValidationError') {
          // Convert ValidationErrors into SubmissionErrors for Redux Form
      return Promise.reject(
          new SubmissionError({
              [location]: message
          })
        );
      }
      return Promise.reject(
          new SubmissionError({
              _error: 'Error submitting message'
          })
      );
    });
  }

  render() {

    let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message message-success">
                    Message submitted successfully
                </div>
            );
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
        }

    return (
      <div className="contact-wrapper">
        <header>
          <h1>Report a problem with your delivery</h1>
          {successMessage}
          {errorMessage}
        </header>
        <main>
          <form
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          >
            <Field
              name="trackingNumber"
              label="Tracking Number"
              type="text"
              component={Input}
              validate={[required, nonEmpty, maxNumbers]}
            />

            <Field
              name="issue"
              label="What is your issue?"
              component={Input}
              element="select"
              validate={[required, nonEmpty]}
              >
              <option value=""></option>
              <option value="not-delivered">My delivery hasn't arrived</option>
              <option value="wrong-item">The wrong item was delivered</option>
              <option value="missing-part">Part of my order was missing</option>
              <option value="damaged">Some of my order arrived damaged</option>
              <option value="other">Other (give more details below)</option>
            </Field>
            <Field
              name="details"
              label="Give more details (optional)"
              type="text"
              cols="30" rows="5"
              component={Input}
            />
            <button type="submit">Submit</button>
          </form>
        </main>
      </div>
    );
  }
}

export default reduxForm({
  form: 'contact'
})(ContactForm);