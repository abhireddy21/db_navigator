import React from "react";
import "./css/info.css";
import dextrus from './css/dextrus.mp4'
export default function Dextrus() {
  return (
    <div>
      <div className="main-cnt">
        <div className="info-cnt">
          <h1>Dextrus</h1>
          <p>
            Dextrus is a purpose-built cloud powered self-service solution, for
            all data practitioners. Dextrus is a no-code high performance
            solution that is complete and comprehensive and helps in building,
            deploying, and managing assets. for data ingestion, streaming,
            cleansing, transforming, analyzing, wrangling and machine learning
            modeling.
          </p>
        </div>
        <div className="video-cnt">
          <video src={dextrus} autoPlay loop muted></video>
        </div>
      </div>
    </div>
  );
}
