import React from "react";
import image from "./QIT Logo.png";
import { FaClock } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Card from "./ImageMain";
import { Link } from "react-router-dom";
// import Button from "devextreme-react/button";
// import Button from '@mui/material/Button';
import "./timeslot.css";
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';


const TimeSlot = () => {
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
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  marginTop: "25px",
                  marginBottom: "22px",
                }}
              >
                Select a Time Slot
              </h3>
              <div style={{marginBottom:"50px"}}>
              <Form>
              <Form.Group>
              <Button className="button1" style={{backgroundColor:"#337AB7",marginRight:"20px"}}>
              <Form.Check
                  type="radio"
                  name="radio-btn-group"
                  id="radio-btn-1"
                  label="7:00 PM"
                  style={{fontSize:"15px"}}
                />
              </Button>
              <Button className="button1" style={{backgroundColor:"#337AB7"}}>
              <Form.Check
              type="radio"
              name="radio-btn-group"
              id="radio-btn-2"
              label="10:00 AM"
              style={{fontSize:"15px"}}
            />
              </Button>
              <br/>
                <Button className="button1" style={{backgroundColor:"#337AB7",marginRight:"20px"}}>
                <Form.Check
                type="radio"
                name="radio-btn-group"
                id="radio-btn-3"
                label="11:00 AM"
                style={{fontSize:"15px"}}
              />
                </Button>
                <Button className="button1" style={{backgroundColor:"#337AB7"}}>
              <Form.Check
              type="radio"
              name="radio-btn-group"
              id="radio-btn-4"
              label="2:00 PM"
              style={{fontSize:"15px"}}
            />
              </Button>
                <br/>
               <Button className="button1" style={{backgroundColor:"#337AB7",marginRight:"20px"}}>
               <Form.Check
               type="radio"
               name="radio-btn-group"
               id="radio-btn-5"
               label="3:00 PM"
               style={{fontSize:"15px"}}
             />
               </Button>
               <Button className="button1" style={{backgroundColor:"#337AB7"}}>
              <Form.Check
              type="radio"
              name="radio-btn-group"
              id="radio-btn-6"
              label="12:00 PM"
              style={{fontSize:"15px"}}
            />
              </Button>
               <br/>
               <Button className="button1" style={{backgroundColor:"#337AB7",marginRight:"20px"}}>
               <Form.Check
               type="radio"
               name="radio-btn-group"
               id="radio-btn-7"
               label="1:30 PM"
               style={{fontSize:"15px"}}
             />
               </Button>
               <Button className="button1" style={{backgroundColor:"#337AB7"}}>
              <Form.Check
              type="radio"
              name="radio-btn-group"
              id="radio-btn-8"
              label="5:00 PM"
              style={{fontSize:"15px"}}
            />
              </Button>
               <br/>
               <Button className="button1" style={{backgroundColor:"#337AB7",marginRight:"20px"}}>
               <Form.Check
               type="radio"
               name="radio-btn-group"
               id="radio-btn-9"
               label="7:00 PM"
               style={{fontSize:"15px"}}
             />
               </Button>
               <Button className="button1" style={{backgroundColor:"#337AB7"}}>
              <Form.Check
              type="radio"
              name="radio-btn-group"
              id="radio-btn-10"
              label="11:00 AM"
              style={{fontSize:"15px",fontWeight:"normal"}}
            />
              </Button>
               
              </Form.Group>
            </Form>

              <br/>
              <Link to="./phoneAuthentication" style={{textDecoration:"none"}}>
              <Button variant="contained" style={{marginTop:"30px",width:"200px",height:"40px",backgroundColor:"#337AB7",fontSize:"15px",color:"white"}}
              
              >Submit</Button>
              
              </Link>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default TimeSlot;
