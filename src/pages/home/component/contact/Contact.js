import React, { useState } from "react";
import {
  UilMobileAndroid,
  UilAt,
  UilMessage,
  UilSpinnerAlt,
} from "@iconscout/react-unicons";

import { Button } from "../../../../components";
import "./style.css";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [validation, setValidation] = useState({});

  const formValidate = (data) => {
    let valid = {};

    if (data.name.length <= 0) valid.name = "please provide name";
    if (data.email.length <= 0) valid.email = "please provide email";
    if (data.feedback.length <= 0) valid.feedback = "please provide feedback";
    setValidation(valid);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    let value = {
      name: target[0]?.value,
      email: target[1]?.value,
      feedback: target[2]?.value,
    };
    const formValid = formValidate(value);
    if (Object.keys(formValid).length <= 0) setLoading(!loading);
  };
  return (
    <div id="Contact" className="page-container">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-btn marginTop30">
          <a href="tel:9122329747">
            <Button>
              <UilMobileAndroid />
              9122329747
            </Button>
          </a>
          <a href="maitto::narayan.k.dubey@gmail.com">
            <Button>
              <UilAt />
              narayan.k.dubey@gmail.com
            </Button>
          </a>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="formItem">
              {/* <label htmlFor="name">Name</label> */}
              <input
                id="name"
                placeholder="Enter your Name"
                style={{
                  border:
                    validation?.name?.length > 0 ? "2px solid red" : "none",
                }}
              />
            </div>
            <div className="formItem">
              {/* <label htmlFor="email">Email</label> */}
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                style={{
                  border:
                    validation?.email?.length > 0 ? "2px solid red" : "none",
                }}
              />
            </div>
            <div className="formItem">
              {/* <label htmlFor="feedback">Feedback</label> */}
              <textarea
                id="feedback"
                rows={5}
                placeholder="Enter your Feedback"
                style={{
                  border:
                    validation?.feedback?.length > 0 ? "2px solid red" : "none",
                }}
              />
            </div>
            <div>
              <Button type="submit" disabled={loading}>
                {" "}
                {loading ? "Submitting..." : "Submit"}
                {loading ? <UilSpinnerAlt /> : <UilMessage />}
              </Button>
              {/* <button type="submit" className="button" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
