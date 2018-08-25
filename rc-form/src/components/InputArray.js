import { createForm, formShape } from 'rc-form';
import React from 'react';
import ReactDOM from 'react-dom';

let uuid = 0;

class InputArray extends React.Component {
    static propTypes = {
        form: formShape,
    };
    constructor(props){
        super(props);
        this.state = {
            keys: []
        }
    }

    add(k){
        uuid++;
        const { form } = this.props;
        // can use data-binding to get
        let keys = form.getFieldValue('keys');
        keys = keys.concat(uuid);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys,
        });
    }

    remove(k){
        const { form } = this.props;
        // can use data-binding to get
        let keys = form.getFieldValue('keys');
        keys = keys.filter((key) => {
            return key !== k;
        });
        // can use data-binding to set
        form.setFieldsValue({
            keys,
        });
    }
    
    submit(e){
        e.preventDefault();
        console.log(this.props.form.getFieldsValue());
    }

    render() {
        const { getFieldProps, getFieldValue } = this.props.form;
        getFieldProps('keys', {
            initialValue: []
        });

        const inputs = getFieldValue('keys').map(k => {
            return (
                <div key={k}>
                    <input {...getFieldProps(`name${k}`)} />
                    <a onClick={() =>this.remove.bind(this, k)}>delete</a>
                </div>
            )
        });

        return (
            <div>
                {inputs}
                <div>
                    <button onClick={e => this.submit(e)}>submit</button>
                    <button onClick={() => this.add()}>add</button>
                </div>
            </div>
        )
    }
}

export default createForm()(InputArray);