import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Shield, TrendingUp } from 'lucide-react';
import '../styles/home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Elevate Your Workforce with Apex HR Consulting</h1>
            <p>
              Premier HR solutions tailored for USA-based businesses. From compliance to talent management, we help you build a stronger organization.
            </p>
            <div className="hero-btns">
              <Link to="/contact" className="btn btn-primary">Get a Free Consultation</Link>
              <Link to="/services" className="btn btn-outline">Explore Our Services</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="placeholder-image">
              <Users size={100} color="var(--accent)" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us bg-alt">
        <div className="container">
          <div className="section-title">
            <h2>Why Apex HR?</h2>
            <p>We combine deep industry knowledge with a personalized approach to solve your most complex HR challenges.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <Shield className="feature-icon" />
              <h3>Compliance First</h3>
              <p>Expert guidance on FLSA, FMLA, and state-specific labor laws to keep your business protected.</p>
            </div>
            <div className="feature-card">
              <Users className="feature-icon" />
              <h3>Talent Acquisition</h3>
              <p>Strategic recruitment processes to find and retain the top 1% of talent in your industry.</p>
            </div>
            <div className="feature-card">
              <TrendingUp className="feature-icon" />
              <h3>Growth Focused</h3>
              <p>Scalable HR infrastructure designed to support your company's expansion from 10 to 1,000+ employees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container cta-container">
          <h2>Ready to transform your HR?</h2>
          <p>Contact us today and let's discuss how we can help your business thrive.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
