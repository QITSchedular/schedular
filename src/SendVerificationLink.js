import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import image from "./QIT Logo.png";
import { FaClock } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Card from "./ImageMain";
import { useNavigate } from 'react-router-dom';


const SendVerification = () => {
  const navigate = useNavigate();
  return (
    <div>
    <Card>
      <div className="Container">
        <div className="row">
          <div className="col-md-5">
            
              <FaArrowLeft
                style={{
                  fontSize: "25px",
                  color: "#337AB7",
                  marginLeft: "30px",
                  marginBottom: "-30px",
                }}
                onClick={() => navigate(-1)}
              />
            
            <img
              src={image}
              alt=""
              style={{
                width: "200px",
                marginLeft: "60px",
                marginTop: "30px",
              }}
            />
            <hr />
            <div style={{ marginLeft: "30px", paddingBottom: "5px" }}>
              <h3 style={{ fontWeight: 700 }}>
                Discovery Call with Quantum IT
              </h3>

              <div style={{ marginTop: "30px" }}>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#737373",
                  }}
                >
                  {" "}
                  <FaClock
                    style={{ fontSize: "15px", marginRight: "10px" }}
                  />
                  30 min
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#737373",
                  }}
                >
                  {" "}
                  <FaVideo
                    style={{ fontSize: "15px", marginRight: "10px" }}
                  />
                  Web conferencing details provided upon confirmation.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-7">
          <div style={{marginLeft:"20px"}}>
          <h2 style={{ fontWeight: 700,marginTop:"20px" }}>Verify Your Email Address</h2>
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            style={{ fontSize: '12px',width:"80%",marginTop:"30px",marginBottom:"20px" }}
          />
          <input
          type="password"
          placeholder="Password"
          className="form-control"
          style={{ fontSize: '12px',width:"80%",marginTop:"30px",marginBottom:"20px" }}
        />
          <button
            className="btn btn-primary"
            style={{width:"180px",height:"30px",fontSize:"14px",backgroundColor:"#337AB7"}}
          >
            Send Verification Link
          </button>
         
        
          
        </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
   
  );
};

export default SendVerification;
