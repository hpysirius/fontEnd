import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import InputArray from './components/InputArray';

class App extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Form />
                <InputArray />
            </div>
        );
    }
}



const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);