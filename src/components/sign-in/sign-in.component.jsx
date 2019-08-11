import React, { Component } from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-iput/form-iput.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({[name]: value})
    };

    render() {
        const { email, password } = this.state;
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        handleChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <CustomButton
                        type="submit"
                    >
                        SIGN IN
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;
