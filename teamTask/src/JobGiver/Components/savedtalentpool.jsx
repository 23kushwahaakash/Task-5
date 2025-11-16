import React from 'react';
import './savedtalentpool.css';

const savedtalentpool = () => {
  const savedTalents = [
    { id: 1, name: "Mayank Kumar", role: "Sr. UX Designer", avatar: "/assets/avatar-mayank.png" },
    { id: 2, name: "Ankit Singh", role: "Product Manager", avatar: "/assets/avatar-ankit.png" },
    { id: 3, name: "Priya Sharma", role: "Frontend Developer", avatar: "/assets/avatar-priya.png" },
  ];

  return (
    <div className="saved-talent-pool card">
      <div className="talent-pool-header flex-between mb-3">
        <h3>Saved Talent Pool</h3>
        <a href="#view-all" className="view-all-link">View All</a>
      </div>
      <ul className="talent-list">
        {savedTalents.map(talent => (
          <li key={talent.id} className="talent-item flex-between">
            <div className="talent-info flex-center">
              <img src={talent.avatar} alt={talent.name} className="talent-avatar" /> 
              <div>
                <h4 className="talent-name">{talent.name}</h4>
                <p className="talent-role">{talent.role}</p>
              </div>
            </div>
            <div className="talent-actions">
              <button className="btn-ghost"><img src="/assets/icon-message-blue.png" alt="Contact" className="icon" /></button> 
              <button className="btn-ghost"><img src="/assets/icon-user-blue.png" alt="View Profile" className="icon" /></button> 
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default savedtalentpool;