import React from 'react';
import videoBack from './css/video.mp4';
import './css/home.css';
export default function Home() {
  return (
    <div>
      <div
        className="home-cnt" >
        <video className="back-video"
          src={videoBack}
          autoPlay
          loop
          muted
        ></video>
        <div
          className="home-content">
          <p>Your End to End</p>
          <h1 style={{fontSize:"50px"}}>Data Integrations & DataOps Solution.</h1>
          <a type="submit" className="home-btn" href="/connect">Connect</a>
        </div>
      </div>
    </div>
  );
}