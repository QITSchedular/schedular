// import React, { useState } from "react";
// // import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
// import firebase from "./firebase"


// const VerifyEmail = () => {
//   const [email, setEmail] = useState('');
//   const [verifyForm, setVerifyForm] = useState({ oobCode: '' });

//   const handleSignUp = async (event) => {
//     event.preventDefault();

//     try {
//       const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, '');
//       sendVerificationEmail(userCredential.user);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const sendVerificationEmail = (user) => {
//     user.sendEmailVerification()
//       .then(() => {
//         console.log('Verification email sent');
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const handleVerifyEmail = async (event) => {
//     event.preventDefault();
//     const { oobCode } = verifyForm;

//     try {
//       await firebase.auth().applyActionCode(oobCode);
//       console.log('Email verification successful');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Sign up</h1>
//       <form onSubmit={handleSignUp}>
//         <label htmlFor="email">Email</label>
//         <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
//         <button type="submit">Sign up</button>
//       </form>

//       <h1>Verify email</h1>
//       <form onSubmit={handleVerifyEmail}>
//         <label htmlFor="oobCode">Verification code</label>
//         <input type="text" id="oobCode" value={verifyForm.oobCode} onChange={(event) => setVerifyForm({ ...verifyForm, oobCode: event.target.value })} />
//         <button type="submit">Verify email</button>
//       </form>
//     </div>
//   );
// };

// export default VerifyEmail;
