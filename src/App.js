import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [currentStyle, setCurrentStyle] = useState('default');
  const [activeTab, setActiveTab] = useState('home');
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'Welcome to the new design system!', time: '2 mins ago' },
    { id: 2, text: 'Your profile is 80% complete', time: '1 hour ago' },
    { id: 3, text: 'New update available', time: '5 hours ago' },
  ]);

  const stats = [
    { label: 'Total Users', value: '12,345', change: '+12%' },
    { label: 'Active Now', value: '3,456', change: '+5%' },
    { label: 'Page Views', value: '89,123', change: '+23%' },
  ];

  return (
    <div className={`app ${currentStyle}`}>
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">✨</span>
            <h1>DesignHub</h1>
          </div>
          <nav className="main-nav">
            <button 
              className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => setActiveTab('home')}
            >
              Home
            </button>
            <button 
              className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
            <button 
              className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              Profile
            </button>
          </nav>
          <div className="user-actions">
            <button className="notification-btn">🔔<span className="badge">3</span></button>
            <button className="user-avatar">
              <span>JD</span>
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="content-header">
          <h1>Welcome back, John!</h1>
          <p>Here's what's happening with your account today.</p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3>{stat.label}</h3>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-change positive">{stat.change}</div>
            </div>
          ))}
        </div>

        <div className="content-grid">
          <section className="card main-card">
            <h2>Recent Activity</h2>
            <div className="activity-list">
              {notifications.map(notification => (
                <div key={notification.id} className="activity-item">
                  <div className="activity-icon">📋</div>
                  <div className="activity-content">
                    <p>{notification.text}</p>
                    <span className="activity-time">{notification.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="card">
            <h2>Quick Actions</h2>
            <div className="action-buttons">
              <button className="action-btn primary">
                <span>+</span> New Project
              </button>
              <button className="action-btn secondary">
                <span>📊</span> View Reports
              </button>
              <button className="action-btn accent">
                <span>⚙️</span> Settings
              </button>
            </div>
          </section>
        </div>

        <section className="card">
          <div className="card-header">
            <h2>Interactive Demo</h2>
            <div className="counter">
              <p>You've clicked the button {count} times</p>
              <button 
                onClick={() => setCount(count + 1)}
                className="primary-btn"
              >
                Click me!
              </button>
            </div>
          </div>
        </section>
      </main>

      <div className="style-buttons">
        <button 
          onClick={() => setCurrentStyle('glassmorphism')}
          className={currentStyle === 'glassmorphism' ? 'active' : ''}
        >
          Glassmorphism
        </button>
        <button 
          onClick={() => setCurrentStyle('neumorphism')}
          className={currentStyle === 'neumorphism' ? 'active' : ''}
        >
          Neumorphism
        </button>
        <button 
          onClick={() => setCurrentStyle('default')}
          className={currentStyle === 'default' ? 'active' : ''}
        >
          Default
        </button>
      </div>
      
      <footer className="footer">
        <p>© {new Date().getFullYear()} My React App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
