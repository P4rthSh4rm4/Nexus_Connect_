import React from 'react';

const StatCard = ({ icon, label, value, iconClass }) => (
  <div className="col-md-4">
    <div className="stat-card custom-card">
      <img src={icon} alt={label} className={`stat-icon ${iconClass}`} />
      <div>
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  </div>
);

export default StatCard;