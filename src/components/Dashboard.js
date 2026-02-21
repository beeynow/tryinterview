import React from 'react';
import './Dashboard.css';

const Dashboard = ({ user, onLogout }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="dashboard">
      {/* Animated Background */}
      <div className="dashboard-background">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
      </div>

      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <div className="logo">
            <div className="logo-icon">🔐</div>
            <span className="logo-text">SecureAuth</span>
          </div>
        </div>
        <div className="header-right">
          <div className="user-info">
            <img 
              src={user.photoURL || 'https://via.placeholder.com/40'} 
              alt={user.displayName}
              className="user-avatar-small"
            />
            <span className="user-name-small">{user.displayName}</span>
          </div>
          <button className="logout-btn" onClick={onLogout}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Welcome Section */}
        <section className="welcome-section">
          <div className="welcome-content">
            <div className="user-profile">
              <img 
                src={user.photoURL || 'https://via.placeholder.com/100'} 
                alt={user.displayName}
                className="user-avatar-large"
              />
              <div className="online-indicator"></div>
            </div>
            <div className="welcome-text">
              <h1>Welcome back, {user.displayName?.split(' ')[0]}! 👋</h1>
              <p className="user-email">{user.email}</p>
              <div className="user-meta">
                <span className="meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Last login: {formatDate(user.metadata.lastSignInTime)}
                </span>
                <span className="meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Member since {formatDate(user.metadata.creationTime)}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="info-cards">
          <div className="info-card">
            <div className="card-icon card-icon-blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="card-content">
              <h3>Profile Complete</h3>
              <p className="card-value">100%</p>
              <p className="card-description">All information verified</p>
            </div>
          </div>

          <div className="info-card">
            <div className="card-icon card-icon-green">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="card-content">
              <h3>Security Status</h3>
              <p className="card-value">Excellent</p>
              <p className="card-description">OAuth 2.0 protected</p>
            </div>
          </div>

          <div className="info-card">
            <div className="card-icon card-icon-purple">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="card-content">
              <h3>Performance</h3>
              <p className="card-value">Fast</p>
              <p className="card-description">Lightning speed access</p>
            </div>
          </div>
        </section>

        {/* Activity Timeline */}
        <section className="activity-section">
          <h2>Recent Activity</h2>
          <div className="activity-timeline">
            <div className="activity-item">
              <div className="activity-icon activity-success">✓</div>
              <div className="activity-content">
                <h4>Successfully signed in</h4>
                <p>Authenticated via {user.providerData[0]?.providerId === 'google.com' ? 'Google' : 'GitHub'}</p>
                <span className="activity-time">Just now</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon activity-info">🔐</div>
              <div className="activity-content">
                <h4>Security verification passed</h4>
                <p>All security checks completed successfully</p>
                <span className="activity-time">1 minute ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon activity-info">👤</div>
              <div className="activity-content">
                <h4>Profile loaded</h4>
                <p>Your profile information has been synchronized</p>
                <span className="activity-time">2 minutes ago</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
