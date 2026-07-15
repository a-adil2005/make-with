import React from 'react';
import './ReelsPreview.css';
import ReelCard from './ReelCard';

function ReelsPreview() {
  // Mock data for the reels
  const reels = [1, 2, 3]; 

  return (
    <section id='reels' className="reels-section">
      <div className="reels-container">
        <h1 className='title'>Trending Reels</h1>
        <div className="reels-grid">
          {reels.map((reel) => (
            <ReelCard key={reel} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReelsPreview;