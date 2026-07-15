import React from "react";
import "./DownloadSection.css";

function DownloadSection() {
  return (
    <section id="down" className="download-section">
      <div className="download-container">
        <h1 className="title">Ready to Get Started?</h1>
        <p>Download MakeWith on your favorite platform.</p>
        <div className="download-buttons">
          {/* <button className="store btn"> */}
          <a
            href="https://apps.apple.com"
            target="_blank"
            className="txtsiz btn"
          >
            App Store
          </a>
          {/* </button> */}

          {/* <button className="store btn"> */}
          <a
            href="https://play.google.com/"
            target="_blank"
            className="txtsiz btn"
          >
            Google Play
          </a>
          {/* </button> */}
        </div>
      </div>
    </section>
  );
}

export default DownloadSection;
