import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB0NcAKqx2Ex0JURoB9T9HskjacUDaOF6s",
  authDomain: "schedular-8ef4e.firebaseapp.com",
  projectId: "schedular-8ef4e",
  storageBucket: "schedular-8ef4e.appspot.com",
  messagingSenderId: "943597961757",
  appId: "1:943597961757:web:aade9c79a74f3a92dd3cf4",
  measurementId: "G-VB0ZTLJ06J"
};



const PhoneVerification = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [code, setCode] = useState("");

  const handleSendCode = () => {
    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "send-code-button",
      {
        size: "invisible",
      }
    );

    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
        alert("Verification code sent to your phone.");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleVerifyCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );

    firebase
      .auth()
      .signInWithCredential(credential)
      .then((userCredential) => {
        alert("Phone verification successful!");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div style={{marginLeft:"20px"}}>
      <h2 style={{ fontWeight: 700,marginTop:"20px" }}>Verify Your Phone Number</h2>
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="form-control"
        style={{ fontSize: '12px',width:"80%",marginTop:"30px",marginBottom:"20px" }}
      />
      <button
        id="send-code-button"
        onClick={handleSendCode}
        className="btn btn-primary"
        style={{width:"180px",height:"30px",fontSize:"14px",backgroundColor:"#337AB7"}}
      >
        Send Code
      </button>
      <input
        type="text"
        placeholder="Verification Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="form-control"
        style={{ fontSize: '12px',width:"80%",marginTop:"30px",marginBottom:"20px" }}
      />
      <button onClick={handleVerifyCode} className="btn btn-success" style={{width:"180px",height:"30px",fontSize:"14px",marginBottom:"30px"}}>
        Verify Code
      </button>
      <br/>
      <Link to="./enterDetails" style={{textDecoration:"none"}}>
      <button className="btn btn-primary" style={{width:"180px",height:"30px",fontSize:"14px",marginBottom:"30px"}}>
       Confirm
    </button>
      </Link>
      
    </div>
  );
};

export default PhoneVerification;
