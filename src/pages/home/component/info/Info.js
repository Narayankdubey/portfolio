import React from "react";
import * as Unicons from "@iconscout/react-unicons";

import { Button, LfBox } from "../../../../components";
import "./style.css";
// import myImg from "../../../../assests/icons.png";
import myImg from "../../../../assests/narayan_profile.png"

const Info = () => {
  return (
    <div id="Home" className="page-container" style={{alignItems:"center"}}>
      <div className="info-container">
      <div className="">
        <LfBox type="rf">
          <h1 className="bold-name">Narayan Dubey</h1>
          <h1>Software Engineer</h1>
        </LfBox>
        <LfBox delay={0.5}>
          <Button
            endIcon={<Unicons.UilArrowRight />}
            onClick={() => (window.location.href = "/#About")}
          >
            About Us{" "}
          </Button>
        </LfBox>
        <div className="info-social-media">
          <LfBox className="social-icons" delay={1}>
            <a href="https://github.com/Narayankdubey" target="_blank" rel="noreferrer">
              <Unicons.UilGithub className="social-icons-svg" />
            </a>
          </LfBox>
          <LfBox className="social-icons" delay={1.5}>
          <a href="https://www.linkedin.com/in/narayankrdubey/" target="_blank" rel="noreferrer">
            <Unicons.UilLinkedin className="social-icons-svg" />
            </a>
          </LfBox>
          <LfBox className="social-icons" delay={2}>
          <a href="https://github.com/Narayankdubey" target="_blank">
            <Unicons.UilFacebook className="social-icons-svg" />
            </a>
          </LfBox>
          {/* <LfBox className="social-icons" delay={1.5}>
            <img src={linkedinIcon} alt="github" />
          </LfBox> */}
        </div>
      </div>
      <div className="">
        <LfBox className="img-container" style={{marginBottom:"0px"}}>
          <img src={myImg} alt="img" />
          {/* <div className="my-pic-bg">
          </div> */}
        </LfBox>
      </div>
      </div>
    </div>
  );
};

export default Info;
