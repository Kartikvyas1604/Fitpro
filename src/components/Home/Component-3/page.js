import React from 'react';
import './Component-3.css';

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <a href="#" className="nav-item">HOME</a>
        <a href="#" className="nav-item">EXERCISES</a>
        <a href="#" className="nav-item">WF PLAN</a>
        <a href="#" className="nav-item">MEAL PLANNER</a>
        <a href="#" className="nav-item">ABOUT US</a>
      </nav>
      <div className="main-content">
        <h1>Perfect Body</h1>
        <p>Crush Goals, Build Muscle: Welcome to Your Fitness Sanctuary</p>
        <a href="#" className="button">BUY A PASS</a>
      </div>
      <div className="social-icons">
        <a href="#" className="social-icon">Instagram</a>
        <a href="#" className="social-icon">Facebook</a>
        <a href="#" className="social-icon">X</a>
        <a href="#" className="social-icon">Profile</a>
      </div>
    </div>
  );
}

export default App;
