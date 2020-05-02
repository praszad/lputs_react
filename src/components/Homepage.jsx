import React, { Component } from 'react';
import logo from '../assets/images/logo.png';

import carouselimg1 from '../assets/images/1.jpg';
import carouselimg2 from '../assets/images/2.jpg';
import carouselimg3 from '../assets/images/3.jpg';
import template1 from '../assets/images/template1.jpg';
import { Leftarrow } from '../assets/svg/icons';
import Footer from '../components/Footer';

class Homepage extends Component {
  render() {
    return (
      <div className='wrapper'>
        <section>
          <div className='inner-section title-section'>
            <h1>
              <img src={logo} alt='' />
            </h1>
            <div className='title-content'>
              <h2>Silver</h2>
              <p>
                Simple, free, fully responsive one-page sites for pretty much
                anything.
              </p>
              <div className='title-button'>
                <a href='' className='btn primary-btn'>
                  Choose a Starting Point
                </a>
                <a href='' className='btn secondary-btn'>
                  Log In
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='inner-section about-section'>
            <div className='about-us-container'>
              <h3>Build one-page sites for pretty much anything</h3>
              <p>
                Whether it's a personal profile, a landing page to capture
                emails, or something a bit more elaborate, Carrd has you
                covered. Simple, responsive, and yup — totally free.
              </p>
            </div>
            <div className='carousel-content'>
              <a href=''>
                <img src={carouselimg1} alt='' />
              </a>
              <a href=''>
                <img src={carouselimg2} alt='' />
              </a>
              <a href=''>
                <img src={carouselimg3} alt='' />
              </a>
              <a href=''>
                <img src={carouselimg1} alt='' />
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className='inner-section features-section '>
            <div className='box-container'>
              <div className='box'>
                <img src={template1} alt='' />
              </div>
              <div className='box content'>
                <h4>Simple</h4>
                <p>
                  Start with one of
                  <a href='' className='link'>
                    dozens of templates
                  </a>
                  (or a blank canvas) and make it your own.
                </p>
              </div>
              <div className='box content'>
                <h4>Responsive</h4>
                <p>
                  Look great at every screen size right out of the box, from
                  phones to tablets to desktops.
                </p>
              </div>
              <div className='box'>
                <img src={template1} alt='' />
              </div>
              <div className='box'>
                <img src={template1} alt='' />
              </div>
              <div className='box content'>
                <h4>Free</h4>
                <p>
                  Build up to three sites per account and use all of Carrd's
                  core features – for free!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='inner-section pro-features-section '>
            <div className='pro-content'>
              <h4>Optional: Go Pro!</h4>
              <p>
                Upgrade your Carrd experience! Go Pro from just
                <strong> $19 / year</strong> (yup, per year) and get access to
                Pro-exclusive features like:
              </p>
              <p className='hints'>
                <strong>Try it free for 7 days. </strong>
                PayPal and all major credit and debit cards accepted.
              </p>
              <button className='btn secondary-varient-btn'>
                Learn More <i className='icon'>{Leftarrow}</i>
              </button>
            </div>
            <div className='features-content'>
              <div className='services'>
                <div className='service-card'>
                  <h4>Custom Domains</h4>
                  <p>
                    Publish sites to any custom domains you own with full SSL
                    support
                    <a className='link' href=''>
                      (via Let's Encrypt).
                    </a>
                  </p>
                </div>
                <div className='service-card'>
                  <h4>More Sites</h4>
                  <p>
                    Build and publish more than three sites from a single Carrd
                    account.
                  </p>
                </div>
                <div className='service-card'>
                  <h4>Forms</h4>
                  <p>
                    Add contact, signup (using
                    <a className='link' href='#' target='_blank'>
                      MailChimp ,
                    </a>
                    <a className='link' href='#' target='_blank'>
                      Revue ,
                    </a>
                    <a className='link' href='#' target='_blank'>
                      ConvertKit ,
                    </a>
                    <a className='link' href='#' target='_blank'>
                      MailerLite ,
                    </a>
                    <a className='link' href='#' target='_blank'>
                      GetResponse ,
                    </a>
                    or
                    <a className='link' href='#' target='_blank'>
                      EmailOctopus
                    </a>
                    ), custom, and payment-enabled forms.
                  </p>
                </div>

                <div className='service-card'>
                  <h4>Widgets + Embeds</h4>
                  <p>
                    Embed your own custom code and widgets from third-party
                    services like Stripe, PayPal, Gumroad, Typeform, and more.
                  </p>
                </div>
                <div className='service-card'>
                  <h4>Google Analytics</h4>
                  <p>
                    Embed your own custom code and widgets from third-party
                    services like Stripe, PayPal, Gumroad, Typeform, and more.
                  </p>
                </div>
                <div className='service-card'>
                  <h4>No Branding</h4>
                  <p>
                    Publish sites without the "Made with Carrd" branding in the
                    footer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='inner-section trigger-section '>
            <h4>Sound good?</h4>
            <p>Click below to get started. No signup required.</p>
            <a href='' className='btn primary-btn'>
              Choose a Starting Point
            </a>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
export default Homepage;
