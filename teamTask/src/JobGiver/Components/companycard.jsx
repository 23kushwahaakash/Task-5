import React from 'react';
import './companycard.css';

const companycard = ({ companyLogo, companyName, postImage, title, description, tags, isNewPost }) => {
  return (
    <div className="company-card card">
      {isNewPost && <span className="new-post-badge badge-primary">New</span>} 
      <div className="company-header flex-between">
        <div className="company-info flex-center">
          <img src={companyLogo} alt={`${companyName} Logo`} className="company-logo" />
          <span className="company-name">{companyName}</span>
        </div>
        <img src="Task-5/teamTask/src/JobGiver/Components/images/union.svg" alt="Options" className="icon options-icon" /> 
      </div>
      <div className="post-image-container">
        <img src={postImage} alt="Post Visual" className="post-image" />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="post-tags">
          {tags.map((tag, index) => (
            <span key={index} className="badge badge-info">{tag}</span>
          ))}
        </div>
        <div className="post-actions flex-between">
          <div className="action-icons">
            <img src="Task-5/teamTask/src/JobGiver/Components/images/heart.svg" alt="Like" className="icon" /> 
            <img src="Task-5/teamTask/src/JobGiver/Components/images/message.svg" alt="Comment" className="icon" /> 
            <img src="Task-5/teamTask/src/JobGiver/Components/images/share.svg" alt="Share" className="icon" /> 
          </div>
          <button className="btn-ghost">View article <img src="/assets/icon-arrow-right.png" alt="Arrow" className="icon" /></button> 
        </div>
      </div>
    </div>
  );
};

export default companycard;