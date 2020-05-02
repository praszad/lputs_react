import React, { Component } from 'react';
import Footer from '../components/Footer';
import logo from '../assets/images/logo.png';

class Login extends Component {
  render() {
    return (
      <div className='login'>
        <h1>Login</h1>
        <div className='login-wrapper'>
          <form>
            <div class='input-field'>
              <input type='email' id='name' />
              <label for='name'>Email Id:</label>
            </div>
            <div class='input-field'>
              <input type='password' id='password' />
              <label for='password'>password</label>
              <button className='show-btn'> Show</button>
            </div>
            <a href='' className=' forgot-pwd'>
              Forgot password ?
            </a>
            <button className='btn primary-btn'>Login</button>
            <a href='' className='sign-up'>
              Sign Up
            </a>
            <div className='custom-chkbox'>
              <input id='one' type='checkbox' />
              <label for='one'>
                <span></span>I agree to the <a href=''>Terms of Use</a>
              </label>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Login;
