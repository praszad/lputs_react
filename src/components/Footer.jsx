import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <ul className='nav-footer'>
          <li>
            <a href='#' className='nav-link'>
              Home
            </a>
          </li>
          <li>
            <a href='#' className='nav-link'>
              Terms
            </a>
          </li>
          <li>
            <a className='nav-link' href='#'>
              Privacy
            </a>
          </li>
          <li>
            <a className='nav-link' href='#' target='_blank'>
              Contact
            </a>
          </li>
        </ul>
        <strong className='footer-strapline'>Planning made easy</strong>
        <div className='copyrights-panel'>
          <span className='copyright '>© Silver. All rights reserved.</span>
          <span className='social'>
            <ul className='nav-social'>
              <li>Follow us</li>
              <li>
                <a
                  href='https://www.facebook.com/pages/Workstack/741291502612738'
                  className='social-link'
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href='http://www.twitter.com/workstack'
                  className='social-link'
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href='https://plus.google.com/+WorkstackMe'
                  className='social-link'
                >
                  Google +
                </a>
              </li>
            </ul>
          </span>
        </div>
      </footer>
    );
  }
}
export default Footer;
