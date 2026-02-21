import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';
import LandingPage from './components/LandingPage';
import AuthModal from './components/AuthModal';
import Dashboard from './components/Dashboard';
import Features from './components/Features';
import Terms from './components/Terms';
import About from './components/About';
import Founder from './components/Founder';
import Privacy from './components/Privacy';
import QuestionBank from './components/QuestionBank';
import ResumeAnalyzer from './components/ResumeAnalyzer';
import MeetingSummarizer from './components/MeetingSummarizer';
import Loading from './components/Loading';
import OnboardingModal from './components/OnboardingModal';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Handle hash-based routing
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleGetStarted = () => {
    setShowAuthModal(true);
  };

  const handleAuthSuccess = (userData, isNewUser) => {
    setUser(userData);
    setShowAuthModal(false);
    
    // Show onboarding instantly for new users only
    if (isNewUser) {
      // Set a small timeout to ensure smooth transition
      setTimeout(() => {
        setShowOnboarding(true);
      }, 100);
    }
  };

  const handleOnboardingComplete = (onboardingData) => {
    // Save onboarding data
    if (user) {
      localStorage.setItem(`user_${user.uid}_onboarded`, 'true');
      localStorage.setItem(`user_${user.uid}_data`, JSON.stringify(onboardingData));
    }
    setShowOnboarding(false);
  };

  const handleCloseModal = () => {
    setShowAuthModal(false);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleBackToHome = () => {
    window.location.hash = '';
    setCurrentPage('home');
  };

  if (loading) {
    return <Loading />;
  }

  // If user is logged in, show dashboard (unless onboarding is active)
  if (user && !showOnboarding) {
    return (
      <div className="App">
        <Dashboard user={user} onLogout={handleLogout} />
      </div>
    );
  }

  // If onboarding is active, show it
  if (showOnboarding && user) {
    return (
      <div className="App">
        <OnboardingModal 
          user={user}
          onComplete={handleOnboardingComplete}
        />
      </div>
    );
  }

  // Check if page requires authentication
  const requiresAuth = (page) => {
    return ['question-bank', 'resume-analyzer', 'meeting-summarizer'].includes(page);
  };

  // Render appropriate page based on currentPage state
  const renderPage = () => {
    // If page requires auth and user is not logged in, show landing page with auth modal
    if (requiresAuth(currentPage) && !user) {
      setShowAuthModal(true);
      setCurrentPage('home');
      return <LandingPage onGetStarted={handleGetStarted} />;
    }

    switch (currentPage) {
      case 'features':
        return <Features onBack={handleBackToHome} />;
      case 'terms':
        return <Terms onBack={handleBackToHome} />;
      case 'about':
        return <About onBack={handleBackToHome} />;
      case 'founder':
        return <Founder onBack={handleBackToHome} />;
      case 'privacy':
        return <Privacy onBack={handleBackToHome} />;
      case 'question-bank':
        return <QuestionBank onBack={handleBackToHome} user={user} />;
      case 'resume-analyzer':
        return <ResumeAnalyzer onBack={handleBackToHome} user={user} />;
      case 'meeting-summarizer':
        return <MeetingSummarizer onBack={handleBackToHome} user={user} />;
      default:
        return <LandingPage onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
      {showAuthModal && (
        <AuthModal 
          onClose={handleCloseModal} 
          onAuthSuccess={handleAuthSuccess}
        />
      )}
    </div>
  );
}

export default App;