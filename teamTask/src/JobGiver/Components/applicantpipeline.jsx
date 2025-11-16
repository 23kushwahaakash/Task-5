import React from 'react';
import './applicantpipeline.css';

const applicantpipeline = () => {
  const pipelineStages = [
    { label: "New Applicants", count: 2, icon: "Task-5/teamTask/src/JobGiver/Components/images/apcontact.svg", type: "new" },
    { label: "In Review", count: 5, icon: "Task-5/teamTask/src/JobGiver/Components/images/apeye.svg", type: "review" },
    { label: "Interviews Scheduled", count: 3, icon: "Task-5/teamTask/src/JobGiver/Components/images/apcalendar.svg", type: "interview" },
    { label: "Hired", count: 1, icon: "Task-5/teamTask/src/JobGiver/Components/images/apdots.svg", type: "hired" },
    { label: "Messages", count: 12, icon: "Task-5/teamTask/src/JobGiver/Components/images/apmsg.svg", type: "message" },
  ];

  return (
    <div className="applicant-pipeline card">
      <h3 className="mb-3">Applicant Pipeline</h3>
      <div className="pipeline-grid">
        {pipelineStages.map((stage, index) => (
          <div key={index} className={`pipeline-stage ${stage.type}`}>
            <div className="stage-header flex-between mb-1">
              <span className="stage-label">{stage.label}</span>
              <img src={stage.icon} alt={`${stage.label} Icon`} className="icon" /> 
            </div>
            <p className="stage-count">{stage.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default applicantpipeline;