import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      <div className="site-section__inset" id="about">
        <header className="site-section__head" style={{ marginBottom: 0 }}>
            <h2 className="site-section__title --like-h6">VGP – LANDOVA</h2>
            <p className="site-section__excerpt" style={{ paddingBottom: '16px' }}>
            LANDOVA is a new sub-brand from VGP, a real estate pioneer<br />
            with more than <strong>67 years of experience and trust</strong>.
            </p>

            <p className="site-section__subhead"><strong>What does LANDOVA mean?</strong></p>

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
            </button>
        </header>
      </div>
    </section>
  );
};

export default AboutUs;
