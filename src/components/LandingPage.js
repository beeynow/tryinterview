import React, { useEffect } from 'react';
import './LandingPage.css';

const LandingPage = ({ onGetStarted }) => {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && hash !== 'home') {
        const newPage = hash;
        if (['features', 'terms', 'about', 'founder', 'privacy', 'question-bank', 'resume-analyzer', 'meeting-summarizer'].includes(newPage)) {
          window.location.href = `#${newPage}`;
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
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

          <button className="cta-button" onClick={onGetStarted}>
            Start Free Trial
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="hero-content">
          <div className="hero-text-container">
            <h1 className="hero-title">
              Master Your Interview Skills with <span className="gradient-text">AI-Powered Practice</span>
            </h1>
            <p className="hero-description">
              Transform your interview preparation with TryInterview's intelligent mock interviews, 
              instant feedback, and comprehensive analytics. Join 50,000+ successful candidates.
            </p>
            <div className="hero-buttons">
              <button className="primary-btn" onClick={onGetStarted}>Get Started Free</button>
              <button className="secondary-btn">Watch Demo</button>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">✓</span>
              <span>50,000+ Users Trust TryInterview</span>
            </div>
          </div>
          
          <div className="hero-image-container">
            <img 
              src="/practice-interview-online.png" 
              alt="Practice interviews online with TryInterview" 
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="content-section" id="problem">
        <div className="section-wrapper">
          <div className="text-container">
            <h2 className="section-title">Feeling Confused About Interview Prep?</h2>
            <p className="section-description">
              Finding the perfect mock interview platform shouldn't be complicated. Many candidates struggle 
              with where to start, what to practice, and how to improve effectively.
            </p>
            <ul className="feature-list">
              <li>❌ Generic interview questions that don't match your industry</li>
              <li>❌ No personalized feedback on your responses</li>
              <li>❌ Lack of real-time practice opportunities</li>
              <li>❌ Expensive coaching that breaks the bank</li>
            </ul>
          </div>
          
          <div className="image-container">
            <img 
              src="/confuse-to-get-perfect-mock-interview-platform-.png" 
              alt="Confused about finding the perfect interview platform" 
              className="section-image"
            />
          </div>
        </div>
      </section>

      {/* Pain Point Section */}
      <section className="content-section" id="pain-point">
        <div className="section-wrapper reverse">
          <div className="image-container">
            <img 
              src="/failed-Interview.png" 
              alt="Failed interview experience" 
              className="section-image"
            />
          </div>
          
          <div className="text-container">
            <h2 className="section-title">Don't Let Failed Interviews Define You</h2>
            <p className="section-description">
              We understand the frustration of interview rejections. Every "no" feels personal, 
              but it's often just a matter of better preparation and practice.
            </p>
            <ul className="feature-list">
              <li>💔 Interview anxiety affecting your performance</li>
              <li>💔 Struggling to articulate your experience</li>
              <li>💔 Missing opportunities due to lack of preparation</li>
              <li>💔 Feeling unprepared for technical or behavioral questions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="content-section" id="solution">
        <div className="section-wrapper">
          <div className="text-container">
            <h2 className="section-title">Build Unshakeable Interview Confidence</h2>
            <p className="section-description">
              TryInterview transforms nervous candidates into confident professionals. 
              Our AI-powered platform provides the practice and feedback you need to excel.
            </p>
            <ul className="feature-list">
              <li>✅ Industry-specific interview simulations</li>
              <li>✅ Real-time AI feedback on your answers</li>
              <li>✅ Personalized improvement recommendations</li>
              <li>✅ Track your progress with detailed analytics</li>
            </ul>
          </div>
          
          <div className="image-container">
            <img 
              src="/confidence-with-interview.png" 
              alt="Build confidence with interview practice" 
              className="section-image"
            />
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="content-section" id="practice">
        <div className="section-wrapper reverse">
          <div className="image-container">
            <img 
              src="/practice-interview-online.png" 
              alt="Practice interviews online anytime" 
              className="section-image"
            />
          </div>
          
          <div className="text-container">
            <h2 className="section-title">Practice Anytime, Anywhere</h2>
            <p className="section-description">
              No scheduling headaches. No time zone conflicts. Practice interviews 24/7 
              at your own pace with our AI-powered platform.
            </p>
            <ul className="feature-list">
              <li>🎯 Unlimited practice sessions</li>
              <li>🎯 Question bank with 10,000+ questions</li>
              <li>🎯 Resume analysis and optimization</li>
              <li>🎯 AI meeting summarizer for post-interview review</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="content-section" id="questions">
        <div className="section-wrapper">
          <div className="text-container">
            <h2 className="section-title">Master Common Interview Questions</h2>
            <p className="section-description">
              Access our comprehensive database of interview questions used by top companies. 
              Practice with real questions from Google, Amazon, Microsoft, and more.
            </p>
            <ul className="feature-list">
              <li>📚 Technical interview questions</li>
              <li>📚 Behavioral interview scenarios</li>
              <li>📚 Case study questions</li>
              <li>📚 System design challenges</li>
            </ul>
          </div>
          
          <div className="image-container">
            <img 
              src="/common-interview-questions.png" 
              alt="Common interview questions database" 
              className="section-image"
            />
          </div>
        </div>
      </section>

      {/* Success Section */}
      <section className="content-section" id="success">
        <div className="section-wrapper reverse">
          <div className="image-container">
            <img 
              src="/sit-for-interview-after-using-tryinterview.png" 
              alt="Ready for interview after using TryInterview" 
              className="section-image"
            />
          </div>
          
          <div className="text-container">
            <h2 className="section-title">Walk Into Interviews With Confidence</h2>
            <p className="section-description">
              After using TryInterview, you'll sit for interviews feeling prepared, confident, 
              and ready to showcase your best self. Join thousands who've transformed their careers.
            </p>
            <ul className="feature-list">
              <li>🌟 98% of users report increased confidence</li>
              <li>🌟 Average 3x improvement in interview performance</li>
              <li>🌟 50,000+ successful job placements</li>
              <li>🌟 Trusted by candidates at Fortune 500 companies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="content-section" id="results">
        <div className="section-wrapper">
          <div className="text-container">
            <h2 className="section-title">Join 50,000+ Successful Candidates</h2>
            <p className="section-description">
              Don't just take our word for it. See the results our users achieve when they 
              commit to mastering their interview skills with TryInterview.
            </p>
            <ul className="feature-list">
              <li>🎊 Land your dream job faster</li>
              <li>🎊 Get higher salary offers</li>
              <li>🎊 Stand out from other candidates</li>
              <li>🎊 Build lifelong interview skills</li>
            </ul>
          </div>
          
          <div className="image-container">
            <img 
              src="/successed-interview-with-tryinterview.site.png" 
              alt="Success with TryInterview platform" 
              className="section-image"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Ace Your Next Interview?</h2>
          <p className="cta-description">
            Join TryInterview today and start practicing with AI-powered mock interviews. 
            Your dream job is just one successful interview away.
          </p>
          <button className="cta-btn" onClick={onGetStarted}>
            Start Your Free Trial
          </button>
          <p className="cta-note">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo.png" alt="TryInterview" className="footer-logo-img" />
              <span>TryInterview</span>
            </div>
            <p>AI-Powered Interview Preparation Platform</p>
          </div>
          
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#question-bank">Question Bank</a></li>
              <li><a href="#resume-analyzer">Resume Analyzer</a></li>
              <li><a href="#meeting-summarizer">Meeting Summarizer</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#founder">Founder</a></li>
              <li><a href="#terms">Terms</a></li>
              <li><a href="#privacy">Privacy</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="mailto:support@tryinterview.com">Contact</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 TryInterview by BeeYnow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
