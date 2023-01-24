import React, { useState } from "react";
import { UilMobileAndroid,UilAt,UilMessage,UilSpinnerAlt } from '@iconscout/react-unicons'

import { Button } from "../../../../components";
import "./style.css";
const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(!loading);
  };
  return (
    <div id="Contact" className="page-container">
      <div className="contact-container">
        <h1 >Contact Us</h1>
        <div className="contact-btn marginTop30">
          <a href="tel:9122329747">
            <Button><UilMobileAndroid/>9122329747</Button>
          </a>
          <a href="maitto::narayan.k.dubey@gmail.com">
            <Button><UilAt/>narayan.k.dubey@gmail.com</Button>
          </a>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="formItem">
              {/* <label htmlFor="name">Name</label> */}
              <input id="name" placeholder="Enter your Name" />
            </div>
            <div className="formItem">
              {/* <label htmlFor="email">Email</label> */}
              <input type="email" id="email" placeholder="Enter your Email" />
            </div>
            <div className="formItem">
              {/* <label htmlFor="feedback">Feedback</label> */}
              <textarea
                id="feedback"
                rows={5}
                placeholder="Enter your Feedback"
              />
            </div>
            <div>
              <Button type="submit" disabled={loading}> {loading ? "Submitting..." : "Submit"}{loading?<UilSpinnerAlt/>:<UilMessage/>}</Button>
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
