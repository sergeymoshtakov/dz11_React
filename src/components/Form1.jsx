import React, { PureComponent, isValidElement } from 'react';
import './Form1.css'

class Form1 extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            name: 'Helo',
            email: '', 
            isValidName: true,
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validateName = (e) => {
        let reg = /^\w{6,20}$/
        if(!reg.test(this.state.name)){
            console.log('error name');
            this.setState({
                isValidName: false,
            });
        } else {
            console.log('no-error');
            this.setState({
                isValidName: true,
            });
        }
    }

    validateReset = () => {
        console.log('no-error');
        this.setState({
            isValidName: true,
        });
    }

    render(){
        return (
            <>
                <input type='txt'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        onInput={this.validateName}
                        placeholder='Input user name'
                        className={!this.state.isValidName ? 'error' : ''}/>
                <p>{this.state.name}</p>
                <input type='txt'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder='Input user email'/>
                <p>{this.state.email}</p>
            </>
        )
    }
}

export default Form1;