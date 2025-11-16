import React from 'react';
import './header.css';

const header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <img src="Task-5/JobGiver/Components/images/logo.svg" alt="NextStep Logo" /> 
        </div>
        <div className="search-bar">
          <img src="Task-5/JobGiver/Components/images/search.svg" alt="Search Icon" className="icon" /> 
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <nav className="header-nav">
        <a href="#home" className="nav-item active">
          <img src="Task-5/JobGiver/Components/images/home.svg" alt="Home Icon" className="icon" />
          Home
        </a>
        <a href="#jobs" className="nav-item">
          <img src="Task-5/JobGiver/Components/images/pp.svg" alt="Jobs Icon" className="icon" /> 
          Jobs
        </a>
        <a href="#messages" className="nav-item">
          <img src="Task-5/JobGiver/Components/images/chat.svg" alt="Messages Icon" className="icon" /> 
          Messages
        </a>
        <a href="#notifications" className="nav-item">
          <img src="Task-5/JobGiver/Components/images/notification.svg" alt="Notifications Icon" className="icon" /> 
          Notifications
        </a>
      </nav>
      <div className="header-right">
        <button className="btn-primary post-job-btn">
          <img src="Task-5/JobGiver/Components/images/plus.webp" alt="Plus Icon" className="icon" />
          Post a Job
        </button>
        <div className="location-selector">
          <img src="Task-5/JobGiver/Components/images/indianflag.svg" alt="Location Icon" className="icon" /> 
          <select>
            <option>USA</option>
            <option>UK</option>
            <option>Canada</option>
          </select>
        </div>
        <div className="user-profile">
          <img src="Task-5/JobGiver/Components/images/pp.svg" alt="User Avatar" className="user-avatar" /> 
          <img src="Task-5/JobGiver/Components/images/down.svg" alt="Dropdown Icon" className="icon dropdown-arrow" /> 
        </div>
      </div>
    </header>
  );
};

export default header;