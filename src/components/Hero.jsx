import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-split">
        {/* Left Side */}
        <div className="hero-left">
          <div className="hero-content">
            <div className="badge">
              <span className="dot"></span> AVAILABLE FOR NEW OPPORTUNITIES
            </div>
            
            <h1 className="hero-title">
              Fatika<br />
              <span className="text-gold">Rahmanisa</span>
            </h1>
            
            <div className="hero-subtitle">
              <div className="line"></div>
              <div>
                <p className="degree">BACHELOR OF PUBLIC HEALTH</p>
                <p className="university">Mulawarman University · OHS Specialization</p>
              </div>
            </div>
            
            <p className="hero-description">
              Public Health graduate specializing in Occupational Health
              & Safety (K3), with field experience in hazard identification,
              industrial hygiene measurement, and OHS compliance
              monitoring.
            </p>
            
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">Contact Me</a>
              <a href="#work" className="btn-outline">View Experience</a>
            </div>
            
            <div className="hero-contact-info">
              <span>Samarinda, Indonesia</span>
              <span>fatikarhmnsa@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="hero-right">
          {/* Curved shape overlay */}
          <div className="curved-overlay"></div>
          
          <div className="hero-visual">
            <div className="profile-card-wrapper">
              <div className="profile-card">
                <img src="/main.jpg" alt="Fatika Rahmanisa" className="profile-img" />
                <div className="profile-badge">
                  Ex Intern PT KPI RU V
                </div>
              </div>
            </div>
            
            <div className="hero-stats">
              <div className="stat-box">
                <h3>7</h3>
                <p>Industrial Hygiene<br/>Instruments</p>
              </div>
              <div className="stat-box">
                <h3>4</h3>
                <p>Achievements</p>
              </div>
              <div className="stat-box">
                <h3>1</h3>
                <p>Certification</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
