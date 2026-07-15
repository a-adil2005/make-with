import React from 'react';

function ReelCard() {
  return (
    <div className="reel-card">
      <div className="reel-video-placeholder card">Video Feed</div>
      <div className="reel-actions">
        <button className='btn-bg'>❤️ Like</button>
        <button className='btn-bg'>💬 Comment</button>
        <button className='btn-bg'>↗️ Share</button>
        <button className="shop-product btn">Shop Product</button>
      </div>
      <div className="product-tag">Product Tag: Smart Watch</div>
    </div>
  );
}

export default ReelCard;