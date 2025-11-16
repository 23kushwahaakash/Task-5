import React from 'react';
import './alertsection.css';

const alertsection = () => {
  return (
    <section className="alerts-section dashboard-section">
      <div className="alert-card info-alert card">
        <img src="Task-5/JobGiver/Components/images/apcontact.svg" alt="Info Icon" className="icon mr-1" /> 
        <span>You have 12 new applicants this week</span>
        <button className="btn-ghost">Review Applicants <img src="/assets/icon-arrow-right-blue.png" alt="Arrow" className="icon" /></button> 
      </div>
      <div className="alert-card warning-alert card">
        <img src="Task-5/JobGiver/Components/images/warning.svg" alt="Warning Icon" className="icon mr-1" /> 
        <span>Your Frontend Developer job post is expiring in 2 days</span>
        <button className="btn-ghost">Extend Post <img src="/assets/icon-arrow-right-blue.png" alt="Arrow" className="icon" /></button> 
      </div>
      <div className="alert-card suggestion-alert card">
        <img src="Task-5/JobGiver/Components/images/bulb.svg" alt="Suggestion Icon" className="icon mr-1" /> 
        <span>Based on your recent postings, here are 3 suggested candidates</span>
        <button className="btn-ghost">View Suggestions <img src="/assets/icon-arrow-right-blue.png" alt="Arrow" className="icon" /></button> 
      </div>
      
    </section>
  );
};

export default alertsection;