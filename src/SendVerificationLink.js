import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const SendVerification = () => {
  return (
    <div style={{marginLeft:"20px"}}>
      <h2 style={{ fontWeight: 700,marginTop:"20px" }}>Verify Your Phone Number</h2>
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
  );
};

export default SendVerification;
