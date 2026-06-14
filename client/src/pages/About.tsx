import React from 'react';
import '../styles/about.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Building Better Workplaces Since 2010</h2>
              <p>
                Apex HR Consulting was founded on the belief that a company's greatest asset is its people. Based in the heart of the USA, we have helped hundreds of organizations navigate the complexities of human resources.
              </p>
              <p>
                Our team of certified HR professionals brings decades of combined experience in compliance, recruitment, and organizational development. We don't just provide advice; we become your strategic partner in growth.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <h3>15+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h3>500+</h3>
                  <p>Clients Served</p>
                </div>
                <div className="stat-item">
                  <h3>98%</h3>
                  <p>Client Retention</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="placeholder-image">
                <p>Our Modern Headquarters</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission bg-alt">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>To empower businesses by providing innovative, compliant, and people-centric HR solutions that drive sustainable success.</p>
            </div>
            <div className="mission-card">
              <h3>Our Vision</h3>
              <p>To be the most trusted HR consulting firm in the USA, recognized for our commitment to excellence and workplace transformation.</p>
            </div>
            <div className="mission-card">
              <h3>Our Values</h3>
              <p>Integrity, Transparency, Excellence, and a relentless focus on the human element of business.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
