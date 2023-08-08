import React from "react";

import AnimatedPage from "../../../../components/ui/AnimatedPage";
import "./style.css";

const About = () => {
  return (
        <div className="aboutus-container">
          <h1>
            Few Things <span className="color-pink">About Me</span>
          </h1>
          <div className="about-content">
            <img
              className="location-img"
              src="https://thumbs.dreamstime.com/b/buddha-smriti-park-patna-bihar-buddha-smriti-park-also-known-as-buddha-memorial-park-urban-park-located-frazer-road-near-168780837.jpg"
              alt="Patna"
            />
            <h4>I'm a JS dev from Patna</h4>
            <p className="color-disabled">
              Been coding for 1+ years and learnt some sleek ways to build
              awesome products
            </p>
          </div>
        </div>
  );
};

export default About;
