import React from 'react';
import './applicanttrends.css';

const applicanttrends = () => {
  return (
    <div className="applicant-trends card">
      <h3 className="mb-3">Application Trends</h3>
      <div className="trends-chart">
        
        <img src="Task-5/teamTask/src/JobGiver/Components/images/CardContent.svg" alt="Applicant Trends Chart" /> 
      </div>
      <div className="chart-legend">
        <span className="legend-item blue-dot"></span> Applications
        <span className="legend-item orange-dot"></span> Views
      </div>
    </div>
  );
};

export default applicanttrends;