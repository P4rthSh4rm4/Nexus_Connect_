import React from 'react';
import StatCard from './Statcard';
import CertificateItem from './CertificateItem';
import LeaderboardItem from './LeaderboardItem';
import { statsData, certificatesData, leaderboardData } from './data'; 


const customStyles = `
    /* Custom Dark Green Theme Styles */
    :root {
        --dark-bg: #121212;
        --card-bg: #1f1f1f;
        --text-light: #f8f9fa;
        --text-muted: #888888;
        --highlight-color: #00ff99; 
        --secondary-accent: #00e088; 
    }
    body {
        background-color: var(--dark-bg);
        color: var(--text-light);
        font-family: Arial, sans-serif;
    }
    .header-bg {
        background-color: var(--dark-bg);
        padding: 1rem 0;
        border-bottom: 1px solid #333333;
    }
    .custom-card {
        background-color: var(--card-bg);
        border: none;
        border-radius: 12px;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
        box-shadow: 0 4px 10px rgba(0, 255, 153, 0.1);
    }
    .stat-card {
        text-align: center;
        padding: 1.5rem 1rem;
        display: flex;
        align-items: center;
        border-radius: 12px;
    }
    .stat-icon {
        width: 40px; 
        height: 40px;
        margin-right: 1rem;
        filter: drop-shadow(0 0 5px var(--secondary-accent));
    }
    .stat-value {
        font-size: 2rem;
        font-weight: bold;
        line-height: 1;
        color: var(--secondary-accent);
    }
    .stat-label {
        font-size: 0.85rem;
        color: var(--text-muted);
    }
    .certificate-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 0;
        border-bottom: 1px solid #333333;
    }
    .certificate-item:last-child {
        border-bottom: none;
    }
    .cert-title {
        font-size: 1rem;
        font-weight: 500;
    }
    .cert-title-icon {
        width: 18px; 
        height: 18px;
        margin-right: 8px;
        vertical-align: middle;
        filter: drop-shadow(0 0 3px #00ff99);
    }
    .cert-date {
        font-size: 0.75rem;
        color: var(--text-muted);
    }
    .cert-tag {
        font-size: 0.6rem;
        font-weight: bold;
        padding: 0.2rem 0.5rem;
        border-radius: 5px;
        margin-right: 5px;
        text-transform: uppercase;
    }
    .tag-international { background-color: #053b23; color: #00ff99; }
    .tag-excellence { background-color: #075c3d; color: #ccffeb; }
    .tag-national { background-color: #1a4d00; color: #bfff80; }
    .tag-merit { background-color: #3b5c3b; color: #d0ffc0; }
    .tag-state { background-color: #215c5c; color: #99ffff; }
    .leaderboard-item {
        background-color: var(--card-bg);
        padding: 0.75rem 1rem;
        border-radius: 8px;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        transition: background-color 0.2s;
    }
    .leaderboard-item.rank-1 {
        background-color: #00ff9930;
        border: 2px solid var(--highlight-color);
        box-shadow: 0 0 15px rgba(0, 255, 153, 0.4);
    }
    .leaderboard-item[style*="border-left: 5px solid #00b377"] { border-left: 5px solid #00b377 !important; }
    .leaderboard-item[style*="border-left: 5px solid #009966"] { border-left: 5px solid #009966 !important; }

    .leaderboard-rank {
        font-size: 1.25rem;
        font-weight: bold;
        width: 30px;
        text-align: right;
        margin-right: 15px;
        color: var(--highlight-color);
    }
    .leaderboard-name {
        font-weight: 600;
        line-height: 1;
    }
    .leaderboard-points {
        font-size: 0.85rem;
        color: var(--text-muted);
    }
    .leaderboard-tags .cert-tag {
        background-color: #333333;
        color: var(--secondary-accent);
        margin-top: 5px;
        display: inline-block;
    }
    .rank-1 .leaderboard-tags .cert-tag {
        background-color: var(--highlight-color);
        color: var(--dark-bg);
    }
    .trophy-icon-img {
        width: 24px;
        height: 24px;
        margin-left: auto;
        filter: drop-shadow(0 0 8px var(--highlight-color));
    }
    .section-icon {
        width: 20px;
        height: 20px;
        margin-right: 8px;
        vertical-align: middle;
        filter: drop-shadow(0 0 5px var(--secondary-accent));
    }
`;


const App = () => (
  <>
    {/* Inject Custom CSS Styles */}
    <style dangerouslySetInnerHTML={{ __html: customStyles }} />
    
    {/* Header */}
    <header className="header-bg sticky-top">
        <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center py-2">
                <div className="d-flex align-items-center">
                    <img src="/image/high-quality.png" alt="Institute Logo" className="section-icon" style={{filter: 'hue-rotate(180deg) brightness(2)'}} />
                    <h4 className="text-light mb-0">Institute Nexus</h4>
                </div>
                <div className="text-end">
                    <p className="mb-0 fw-bold">Parth Sharma</p>
                    <small className="text-muted">parthsharmaty@gmail.com</small>
                </div>
            </div>
        </div>
    </header>

    {/* Main Content Dashboard */}
    <div className="container-fluid py-4">
      <div className="row">
        {/* STATS CARDS ROW */}
        <div className="col-lg-12 mb-4">
          <div className="row">
            {statsData.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>

        {/* MY CERTIFICATES COLUMN */}
        <div className="col-lg-7">
          <div className="custom-card">
            <h5 className="mb-4">
              <img src="/image/flower2.png" alt="Certificates" className="section-icon" /> My Certificates
            </h5>
            {certificatesData.map((cert, index) => (
              <CertificateItem key={index} {...cert} />
            ))}
          </div>
        </div>

        {/* LEADERBOARD COLUMN */}
        <div className="col-lg-5">
          <div className="custom-card">
            <h5 className="mb-4">
              <img src="/image/flower2.png" alt="Leaderboard" className="section-icon" /> Leaderboard
            </h5>
            {leaderboardData.map((leader, index) => (
              <LeaderboardItem key={index} {...leader} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default App;