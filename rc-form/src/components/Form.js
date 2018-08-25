import React, { Component } from 'react';
import { createForm, formShape } from 'rc-form';

class HForm extends Component {
  static propTypes = {
    form: formShape,
  };

  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
    });
  }

  render() {
    let errors;
    const { getFieldProps, getFieldError } = this.props.form;
    return (
      <div>
        <input {...getFieldProps('name')}/>
        <input {...getFieldProps('email', {
          onChange(){}, // have to write original onChange here if you need
          rules: [{required: true}],
        })}/>
        {(errors = getFieldError('email')) ? errors.join(',') : null}
        <button onClick={this.submit}>submit</button>
      </div>
    );
  }
}
export default createForm()(HForm);