import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useRef,
} from "react";
import {
  Form,
  SimpleItem,
  Label,
  GroupItem,
  ColCountByScreen,
  Item,
  EmptyItem,
} from "devextreme-react/form";
import TextBox from "devextreme-react/text-box";
import notify from "devextreme/ui/notify";
import "devextreme-react/text-area";
import "devextreme/dist/css/dx.light.css";
import Button from "devextreme-react/button";
import TextArea from "devextreme-react/text-area";
import Validator, {
  RequiredRule,
  NumericRule,
  EmailRule,
  StringLengthRule,
  PatternRule,
  RangeRule,
} from "devextreme-react/validator";
import { Popup } from "devextreme-react/popup";
import ValidationGroup from "devextreme-react/validation-group";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import { storage } from "./firebase";
import { auth, registerWithEmailAndPassword } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";


const FormMain = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  // const [addGuestEmail, setAddGuestEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [subject, setSubject] = useState("");
  const [user, loading, error] = useAuthState(auth);


  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, website,password, companyName, subject);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/sendVerification");
  }, [user, loading]);

  const namePattern = /^[^0-9]+$/;
  const phonePattern = /^[02-9]\d{9}$/;
  const phoneRules = {
    X: /[02-9]/,
  };
  // For Email Validation
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;
    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  const scheduleEvent = async (e) => {
    // e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      companyName === "" ||
      subject === ""
    ) {
      notify(
        {
          message: "Please fill all the fields",
          width: 300,
          // shading: true,
          // position: "center",
        },
        "error",
        500
      );
    } else {
      notify(
        {
          message:
            "Thanks for Scheduling a Meeting with us. You will receive a mail Shortly.",
          width: 600,
          shading: true,
          position: "center",
        },
        "success",
        1200
      );
      setTimeout(() => {
        window.location.reload(true);
      }, 1400);
      navigate("/");
      // refreshPage();
    }
  };

  function refreshPage() {
    setTimeout(window.location.reload(true), 1500);
  }
  return (
    <React.Fragment>
      <div
        style={{
          marginRight: "25px",
          marginLeft: "25px",
          marginTop: "20px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            marginBottom: "5px",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              fontWeight: 700,
              marginTop: "25px",
              marginBottom: "22px",
            }}
          >
            Enter your Details
          </h3>
        </div>
        <div
          style={{
            marginTop: "5px",
          }}
        >
          <ValidationGroup>
            <Form
              colCount={2}
              labelMode="floating"
              labelLocation="left"
              // onContentReady={validateForm}
              //label="Select the"
            >
              <GroupItem>
                <TextBox
                  label="Full Name"
                  labelMode="floating"
                  mode="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onValueChanged={(e) => {
                    setName(e.value);
                    console.log(e.value);
                  }}
                  height={40}
                >
                  <Validator>
                    <RequiredRule message="Name is required" />
                    <PatternRule
                      message="Do not use digits in the Name"
                      pattern={namePattern}
                    />
                    <StringLengthRule
                      message="Name must have atleast 2 symbols"
                      min={2}
                    />
                  </Validator>
                </TextBox>
                <TextBox
                  label="Email Address"
                  labelMode="floating"
                  mode="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onValueChanged={(e) => {
                    setEmail(e.value);
                    console.log(e.value);
                  }}
                  height={40}
                >
                  {emailError}
                  <Validator>
                    <RequiredRule message="Email is required" />
                    <EmailRule message="Email Format is invalid" />
                  </Validator>
                </TextBox>
              </GroupItem>
              <GroupItem>
                <TextBox
                  label="Company Name"
                  labelMode="floating"
                  mode="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  onValueChanged={(e) => {
                    setCompanyName(e.value);
                    console.log(e.value);
                  }}
                  height={40}
                >
                  <Validator>
                    <RequiredRule message="Company Name is required" />
                    <StringLengthRule
                      message="Company Name must have atleast 2 symbols"
                      min={2}
                    />
                  </Validator>
                </TextBox>
                <TextBox
                  label="Password"
                  labelMode="floating"
                  mode="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // onValueChanged={(e) => {
                  //   setWebsite(e.value);
                  //   console.log(e.value);
                  // }}
                  height={40}
                ></TextBox>
              </GroupItem>
              <GroupItem colSpan={2}>
                <TextBox
                  label="Website"
                  labelMode="floating"
                  mode="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  onValueChanged={(e) => {
                    setWebsite(e.value);
                    console.log(e.value);
                  }}
                  height={40}
                ></TextBox>
              </GroupItem>
              <GroupItem colSpan={2}>
                <TextArea
                  label="Subject"
                  labelMode="floating"
                  mode="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  onValueChanged={(e) => {
                    setSubject(e.value);
                    console.log(e.value);
                  }}
                  height={90}
                >
                  <Validator>
                    <RequiredRule message="Subject is required" />
                    <StringLengthRule
                      message="Subject must have atleast 4 symbols"
                      min={4}
                    />
                  </Validator>
                </TextArea>
              </GroupItem>
            </Form>
          </ValidationGroup>
        </div>
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <Button
            width={160}
            height={40}
            text="Schedule Event"
            type="default"
            stylingMode="contained"
            onClick={register}
            // onClick={scheduleEvent}
          ></Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FormMain;
