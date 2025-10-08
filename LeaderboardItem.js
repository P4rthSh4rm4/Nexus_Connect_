import React from 'react';

const LeaderboardItem = ({ rank, name, points, isWinner, tags, customBg }) => {
  const itemClass = isWinner ? 'leaderboard-item rank-1' : 'leaderboard-item';
  const customStyle = customBg ? { backgroundColor: customBg } : {};
  
  // Conditionally set the style for Rank 2 and 3 based on your CSS definitions
  if (rank === 2) {
     customStyle.backgroundColor = '#2a2a2a'; // Consistent dark background
     customStyle.borderLeft = '5px solid #00b377'; // Green border for visual distinction
  }
  if (rank === 3) {
     customStyle.backgroundColor = '#2a2a2a'; // Consistent dark background
     customStyle.borderLeft = '5px solid #009966'; // Green border for visual distinction
  }

  return (
    <div className={itemClass} style={customStyle}>
      <div className="leaderboard-rank">{rank}</div>
      <div>
        <div className="leaderboard-name">{name}</div>
        <div className="leaderboard-points">{points} pts</div>
        <div className="leaderboard-tags">
          {tags.map((tag, index) => (
            <span key={index} className="cert-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      {isWinner && (
        <img src="/image/high-quality.png" alt="Trophy" className="trophy-icon-img" />
      )}
    </div>
  );
};

export default LeaderboardItem;