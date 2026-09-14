import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">

        {/* Left Side: Images */}
        <div className="about-images">
          <div className="img-card img-left">
            <img src="/about-1.jpg" alt="Fatika 1" />
          </div>
          <div className="img-card img-center">
            <img src="/about-2.jpg" alt="Fatika 2" />
          </div>
          <div className="img-card img-right">
            <img src="/about-3.jpg" alt="Fatika 3" />
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="about-content">
          <p className="section-subtitle">PROFILE</p>
          <h2 className="section-title">
            Hi, I'm <span className="text-gold">Fatika</span>
          </h2>
          <div className="line-gold"></div>

          <div className="about-text">
            <p>
              Public Health graduate specializing in <strong>Occupational Health and Safety (K3)</strong>,
              with hands-on experience in hazard identification, risk assessment, and
              compliance monitoring of OHS procedures through field activities such as Job
              Safety Observation (JSO), Toolbox Meetings (TBM), industrial hygiene
              measurement, and chemical hazard location mapping.
            </p>
            <p>
              Gained direct field experience at <strong>PT. Kilang Pertamina Internasional RU V
                Balikpapan</strong> and trained as a <strong>General Occupational Safety and Health Expert</strong>
              by Nagan Training.
            </p>
            <p>
              Skilled in translating field observations into structured, risk-based OHS reports
              and recommendations. Seeking to contribute to occupational health and
              safety functions in the workplace through direct work experience.
            </p>
          </div>

          <div className="about-tags">
            <span className="tag">Public Health Graduate</span>
            <span className="tag">OHS/K3 Specialization</span>
            <span className="tag">Oil & Gas Industry Experience</span>
            <span className="tag">Chemical Hazard Mapping</span>
            <span className="tag">Risk-Based OHS Reporting</span>
            <span className="tag">JSO & TBM Facilitation</span>
          </div>
        </div>

      </div>

      {/* Bottom wave */}
      <div className="wave-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C71.39,47.16,163.66,80.12,246,89.5,271.39,92.38,296.88,88.4,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default About;
