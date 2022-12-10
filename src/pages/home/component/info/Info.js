import React from 'react'
import * as Unicons from '@iconscout/react-unicons';

import { Button, LfBox } from "../../../../components"
import "./style.css"
import myImg from "../../../../assests/icons.png"

const Info = () => {

  return (
    <div id="Home" className='page-container'>
      <div className="">
        <LfBox type="rf">
          <h1 className="bold-name">Narayan Dubey</h1>
          <h1>Software Engineer</h1>
        </LfBox>
        <LfBox delay={0.5}>
          <Button endIcon={<Unicons.UilArrowRight />} onClick={() => window.location.href = "/#About"}>About Us </Button>
        </LfBox>
        <div className="info-social-media">
          <LfBox className="social-icons" delay={1}>
            <Unicons.UilGithub className="social-icons-svg" />
          </LfBox>
          <LfBox className="social-icons" delay={1.5}>
            <Unicons.UilLinkedin className="social-icons-svg" />
          </LfBox>
          <LfBox className="social-icons" delay={2}>
            <Unicons.UilFacebook className="social-icons-svg" />
          </LfBox>
          {/* <LfBox className="social-icons" delay={1.5}>
            <img src={linkedinIcon} alt="github" />
          </LfBox> */}

        </div>
      </div>
      <div className="">
        <LfBox className="img-container">
          <img src={myImg} alt="img" />
          {/* <div className="my-pic-bg">
          </div> */}
        </LfBox>
      </div>
    </div>
  )
}

export default Info