import React from "react";
import "./css/info.css";
import rdt from './css/rdt.mp4';
export default function RDt() {
  return (
    <div>
      <div className="main-cnt">
        <div className="info-cnt">
          <h1>RDt</h1>
          <p>
            RightData tool is a no-code data testing, reconciliation and
            validation suite. We empower data testing, data governance and data
            steward teams with data quality assurance and quality control audit
            automation capabilities.
          </p>
        </div>
        <div className="video-cnt">
        <video src={rdt} autoPlay loop muted></video>
        </div>
      </div>
    </div>
  );
}
