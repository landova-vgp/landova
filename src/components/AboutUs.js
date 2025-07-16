import React from 'react';
import './AboutUs.css';
import aboutImage from '../assets/founder.jpeg';

const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      <div className="site-section__inset" id="about">
        <header className="site-section__head" style={{ marginBottom: 0 }}>
            <h2 className="site-section__title --like-h6">ABOUT US</h2>
            <p className="site-section__excerpt" style={{ paddingBottom: '16px', lineHeight: '1.25', letterSpacing: '.0007em' }}>
            The VGP motto<br/>
            <strong>Everything for Everyone.</strong>
            </p>

            <div className='founder'>
              <img src={aboutImage} alt={`Founder`} className='about-us-image'/>
              <p>
                The success behind brand VGP can be attributed to a one man army, a visionary, philanthropist and pioneer Mr. V.G. Panneerdas,
                our founder. His long journey, from Valliyur, Thirunelveli to Chennai, starting as a salesman to building an empire, single-handedly is solely possible through hard work,
                determination and vision. He was known to have made things affordable to the common man through easy installments as the first one to introduce the concept of “Hire Purchase” – buy now and pay later.
                His vision to achieve “Everything for Everyone” continues to be our Corporate motto. Over the span of five and a half decades, from being a consumer durables retail outlet, VGP has established
                itself as a brand in many sectors including Retail-VGPanneerdas & Co., Real estate – VGP Housing: Resorts – VGP Golden Beach resort: Amusement parks – VGP Universal Kingdom:
                Video and audio studios -VGP Video Vision of India.
              </p>
            </div>

            {/* <p className="site-section__subhead"><strong>What does LANDOVA mean?</strong></p>

            <p>
            The name LANDOVA is inspired by the Slavic word “land”, meaning “earth or land,” and the suffix “ova,” which denotes belonging or origin.
            </p>

            <p>LAND + OVA = “Belonging to the Land”</p>

            <ul className="about-highlights">It reflects:
                <li>Ownership – Every plot belongs to you with pride</li>
                <li>Roots – A strong connection to the earth</li>
                <li>Legacy – A place that stays in your family for generations</li>
            </ul>

            <blockquote className="about-quote">
              “LANDOVA means more than just buying a plot – it means owning a piece of the future, with pride and purpose.”
            </blockquote>

            <br/>

            <p><strong><center>Don’t miss the chance to own your dream plot!</center></strong></p><br/><br/>

            <p>Project brochure and full details are attached for your reference.</p>

            <button className="button item---list__more">
                <i className="about-us-arrow" aria-hidden="true">
                    <svg width="9" height="13" viewBox="0 0 9 13" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 6.5L1 12" stroke="white" strokeWidth="2" fill="none" />
                    </svg>
                </i>
            <span>Download Brochure</span>
            </button> */}
        </header>
      </div>
    </section>
  );
};

export default AboutUs;
