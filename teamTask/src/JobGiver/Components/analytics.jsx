import React from 'react';
import './analytics.css';

const analytics = () => {
  const metrics = [
    { label: "Active Job Posts", value: 3, icon: "Task-5/teamTask/src/JobGiver/Components/images/bag.svg" },
    { label: "Total Applicants", value: 453, icon: "Task-5/teamTask/src/JobGiver/Components/images/apcontact.svg" },
    { label: "Interviews Scheduled", value: 7, icon: "Task-5/teamTask/src/JobGiver/Components/images/apcalendar" },
    { label: "Expiring Soon", value: 2, icon: "Task-5/teamTask/src/JobGiver/Components/images/warning.svg" },
  ];

  return (
    <section className="analytics-overview dashboard-section">
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card card">
            <div className="flex-between mb-1">
              <span className="metric-label">{metric.label}</span>
              <img src={metric.icon} alt={`${metric.label} Icon`} className="icon" /> 
            </div>
            <p className="metric-value">{metric.value}</p>
            <span className="metric-period">this week</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default analytics;