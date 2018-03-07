import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from './input';
import { required, nonEmpty, maxNumbers } from  '../validators';

export class ContactForm extends React.Component {

  onSubmit = (values) => {
    console.log(values);
  }

  render() {
    return (
      <div className="contact-wrapper">
        <header>
          <h1>Report a problem with your delivery</h1>
        </header>
        <main>
          <form
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          >
            <Field
              name="tracking number"
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