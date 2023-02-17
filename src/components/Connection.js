import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import connectVideo from "./css/connectVideo.mp4";
import './css/loader.css';

export default function Connection() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    url: "",
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post("http://192.168.0.158:8080/dextrus/connect", data)
      .then((response) => {
        console.log(response.data);
        navigate("/server", { state: data });
      })
      .catch((error) => {
        
        toast.error("Error: Connection to Server!", {
          position: toast.POSITION.TOP_CENTER,
        });
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <>
      <div style={{ width: "100%", height: "90vh", position: "relative" }}>
        <video
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "-1",
          }}
          src={connectVideo}
          autoPlay
          loop
          muted
        ></video>
        <div
          style={{
            width: "100vw",
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                color: "rgba(255,255,255,0.5)",
                marginTop: "50px",
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "50px",
              }}
            >
              Connect to Database
            </h1>
          </div>
          <div
            className="container col-sm-6 p-3"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              boxShadow: " 0 15px 25px rgba(129, 124, 124, 0.2)",
              backdropFilter: "blur(2px)",
            }}
          >
            <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
              <div className="mb-3">
                <input
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    boxShadow: " 0 15px 25px rgba(129, 124, 124, 0.2)",
                  }}
                  type="text"
                  required
                  className="form-control"
                  name="url"
                  placeholder="Enter URL"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    boxShadow: " 0 15px 25px rgba(129, 124, 124, 0.2)",
                  }}
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  onChange={handleChange}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    boxShadow: " 0 15px 25px rgba(129, 124, 124, 0.2)",
                  }}
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  required
                  className="form-control"
                />
              </div>

              <button type="submit" className="btn btn-outline-success" style={{width:"80px",height:"40px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
                {loading ? (
                 <div class="spinner">
                 </div>
                ) : (
                  <span>Connect</span>
                )}
              </button>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
