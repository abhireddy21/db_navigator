import React from "react";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <a className="navbar-brand" style={{fontFamily: "'Roboto Mono', monospace",fontWeight:"800"}} href="/">
            RightData
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/dextrus">
                Dextrus
              </a>
              <a className="nav-link" href="/rdt">
                RDt
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
