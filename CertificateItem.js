import React from 'react';

const CertificateItem = ({ icon, title, date, points, tags }) => (
  <div className="certificate-item">
    <div>
      <div className="cert-title">
        <img src={icon} alt="Star" className="cert-title-icon" /> {title}
      </div>
      <small className="cert-date">{date}</small>
      <div className="mt-1">
        {tags.map((tag, index) => (
          <span key={index} className={`cert-tag ${tag.class}`}>
            {tag.label}
          </span>
        ))}
      </div>
    </div>
    <div className="text-end">
      <div className="fw-bold">{points}</div>
      <small className="text-muted">points</small>
    </div>
  </div>
);

export default CertificateItem;