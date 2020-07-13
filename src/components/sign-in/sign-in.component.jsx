import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { Link } from 'react-router-dom';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      debugger;
      this.setState({ email: '', password: '' });
    } catch (error) {
      toast(error.message);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'
          style={{
            fontSize: '1.4rem'
          }}
        >Đã có tài khoản!</h2>
        <span>Đăng nhập ngay!</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='mật khẩu'
            required
          />
          <div className='buttons'
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <CustomButton type='submit'
            > Đăng nhập </CustomButton>
            <ToastContainer />
            <Link
              to='/forgot'
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              Quên mật khẩu?
            </Link>
          </div>
        </form>
        <CustomButton
          style={{
            marginTop: '1rem'
          }}
          onClick={signInWithGoogle} isGoogleSignIn>
          Đăng nhập với Google
        </CustomButton>
      </div>
    );
  }
}

export default SignIn;