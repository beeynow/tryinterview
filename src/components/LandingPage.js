import React, { useEffect } from 'react';
import './LandingPage.css';

function LandingPage({ onGetStarted }) {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.landing-header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="landing-page">
      {/* Header */}
      <header className="landing-header">
        <div className="header-content">
          <div className="logo-section">
            <img src="/logo.png" alt="TryInterview Logo" className="logo-img" />
            <span className="brand-name">TryInterview</span>
          </div>
          <nav>
            <ul className="nav-menu">
              <li><button onClick={() => window.location.href = '#features'}>Features</button></li>
              <li><button onClick={() => window.location.href = '#terms'}>Terms</button></li>
              <li><button onClick={() => window.location.href = '#about'}>About</button></li>
              <li><button onClick={() => window.location.href = '#founder'}>Founder</button></li>
              <li><button onClick={() => window.location.href = '#privacy'}>Privacy</button></li>
            </ul>
          </nav>
          <button className="header-cta" onClick={onGetStarted}>Start Free Trial</button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-text-container">
            <span className="hero-badge">🎯 #1 Mock Interview Platform</span>
            <h1 className="hero-title">
              Master Your Interview Skills with <span className="gradient-text">TryInterview</span>
            </h1>
            <p className="hero-description">
              Practice with AI-powered mock interviews, get instant feedback, and land your dream job with confidence. Join thousands of successful candidates.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={onGetStarted}>Start Practicing Free</button>
              <button className="btn-secondary">Watch Demo</button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50K+</span>
                <span className="stat-label">Active Users</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Pass Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Available</span>
              </div>
            </div>
          </div>
          <div className="hero-image-container">
            <img src="/practice-interview-online.png" alt="Practice Interview Online" className="hero-image" />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="content-section">
        <div className="section-wrapper">
          <div className="text-container">
            <span className="section-badge">The Challenge</span>
            <h2 className="section-title">Struggling to Find the Right Interview Prep Platform?</h2>
            <p className="section-description">
              Many candidates fail interviews not because they lack skills, but because they lack proper preparation and practice.
            </p>
            <ul className="feature-list">
              <li>No realistic interview simulation</li>
              <li>Expensive coaching sessions</li>
              <li>Limited feedback on performance</li>
              <li>Difficulty finding the right resources</li>
            </ul>
          </div>
          <div className="image-container">
            <img src="/confuse-to-get-perfect-mock-interview-platform-.png" alt="Confused about interview prep" className="section-image" />
          </div>
        </div>
      </section>

      {/* Pain Point Section */}
      <section id="pain-point" className="content-section">
        <div className="section-wrapper reverse">
          <div className="text-container">
            <span className="section-badge">Common Mistakes</span>
            <h2 className="section-title">Why Candidates Fail Interviews</h2>
            <p className="section-description">
              Without proper preparation, even the most qualified candidates struggle during interviews. Here's why:
            </p>
            <ul className="feature-list">
              <li>Lack of practice with real interview questions</li>
              <li>Poor communication and presentation skills</li>
              <li>Nervousness and anxiety during interviews</li>
              <li>No feedback to improve performance</li>
            </ul>
          </div>
          <div className="image-container">
            <img src="/failed-Interview.png" alt="Failed Interview" className="section-image" />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="content-section">
        <div className="section-wrapper">
          <div className="text-container">
            <span className="section-badge">The Solution</span>
            <h2 className="section-title">Build Confidence with Smart Practice</h2>
            <p className="section-description">
              TryInterview provides realistic mock interviews that help you practice, improve, and gain the confidence you need to succeed.
            </p>
            <ul className="feature-list">
              <li>AI-powered interview simulations</li>
              <li>Instant feedback and performance analysis</li>
              <li>Practice anytime, anywhere</li>
              <li>Affordable and accessible for everyone</li>
            </ul>
            <button className="btn-primary" onClick={onGetStarted}>Start Your Journey</button>
          </div>
          <div className="image-container">
            <img src="/confidence-with-interview.png" alt="Confidence with Interview" className="section-image" />
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section id="features" className="content-section">
        <div className="section-wrapper reverse">
          <div className="text-container">
            <span className="section-badge">Practice Makes Perfect</span>
            <h2 className="section-title">Practice with Real Interview Scenarios</h2>
            <p className="section-description">
              Experience realistic interview scenarios tailored to your industry and role. Practice with our AI interviewer and get better with every session.
            </p>
            <ul className="feature-list">
              <li>Industry-specific interview questions</li>
              <li>Video and audio recording capabilities</li>
              <li>Real-time feedback and tips</li>
              <li>Track your progress over time</li>
            </ul>
          </div>
          <div className="image-container">
            <img src="/practice-interview-online.png" alt="Practice Interview Online" className="section-image" />
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section id="how-it-works" className="content-section">
        <div className="section-wrapper">
          <div className="text-container">
            <span className="section-badge">Question Bank</span>
            <h2 className="section-title">Master Common Interview Questions</h2>
            <p className="section-description">
              Access our comprehensive database of common interview questions across different industries and job roles.
            </p>
            <ul className="feature-list">
              <li>1000+ curated interview questions</li>
              <li>Behavioral and technical questions</li>
              <li>Sample answers and best practices</li>
              <li>Updated regularly with new questions</li>
            </ul>
            <button className="btn-primary" onClick={onGetStarted}>Explore Questions</button>
          </div>
          <div className="image-container">
            <img src="/common-interview-questions.png" alt="Common Interview Questions" className="section-image" />
          </div>
        </div>
      </section>

      {/* Success Preparation Section */}
      <section id="preparation" className="content-section">
        <div className="section-wrapper reverse">
          <div className="text-container">
            <span className="section-badge">Get Ready</span>
            <h2 className="section-title">Prepare for Your Big Day</h2>
            <p className="section-description">
              With TryInterview, you'll walk into your interview room fully prepared, confident, and ready to impress.
            </p>
            <ul className="feature-list">
              <li>Comprehensive preparation materials</li>
              <li>Personalized study plans</li>
              <li>Mock interview sessions</li>
              <li>Expert tips and strategies</li>
            </ul>
          </div>
          <div className="image-container">
            <img src="/sit-for-interview-after-using-tryinterview.png" alt="Ready for Interview" className="section-image" />
          </div>
        </div>
      </section>

      {/* Success Section */}
      <section id="success" className="content-section">
        <div className="section-wrapper">
          <div className="text-container">
            <span className="section-badge">Success Stories</span>
            <h2 className="section-title">Land Your Dream Job with Confidence</h2>
            <p className="section-description">
              Join thousands of successful candidates who used TryInterview to ace their interviews and secure their dream positions.
            </p>
            <ul className="feature-list">
              <li>98% of users report improved confidence</li>
              <li>Average 3x more interview callbacks</li>
              <li>Success across all industries</li>
              <li>Proven track record of results</li>
            </ul>
            <button className="btn-primary" onClick={onGetStarted}>Join Success Stories</button>
          </div>
          <div className="image-container">
            <img src="/successed-interview-with-tryinterview.site.png" alt="Successful Interview" className="section-image" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Ace Your Next Interview?</h2>
          <p className="cta-description">
            Start practicing today and join thousands of successful candidates who landed their dream jobs with TryInterview.
          </p>
          <button className="cta-button" onClick={onGetStarted}>Start Free Trial Now</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-brand">
              <img src="/logo.png" alt="TryInterview Logo" className="footer-logo" />
              <span className="footer-brand-name">TryInterview</span>
            </div>
            <p className="footer-description">
              The #1 platform for mock interviews and career preparation. Practice, improve, and succeed.
            </p>
          </div>
          <div className="footer-section">
            <h4>Product</h4>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><a href="#help">Help Center</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 TryInterview. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
