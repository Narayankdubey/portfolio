import React from "react";
import AnimatedPage from "../../../../components/ui/AnimatedPage";

import "./style.css";

const Experience = () => {
  const data = [
    {
      time: "Jan 2022 to Present",
      position: "Software Development Engineer",
      comapny: "Valuebound",
      details: "",
    },
    {
      time: "Sept 2021 to Dec 2021",
      position: "Software Engineer Trainee",
      comapny: "Valuebound",
      details: "",
    },
  ];
  const skills = [
    {
      title:"React", icon:"https://cdn.sanity.io/images/d31heeut/production/4147ebe6260a4855a4f5e9af3c19b60ffec89f7f-1200x1043.png",rating:"4"
    },
    {
      title:"Node", icon:"https://cdn.sanity.io/images/d31heeut/production/0bce24a0cfa0e198cbeddb9ee7ab79e162d472d5-360x360.png",rating:"3"
    },
  ]
  return (
    <AnimatedPage id="Experience" className="page-container">
      <div className="width100">
        <h1>Skills & Experiences</h1>
      </div>
      <div className="left">
        {skills.map((data,index)=>(
          <div className="icon-container" key={index}>
            <img src={data?.icon} alt={data?.title} className="skill-icon" />
            <h4>{data?.title}</h4>
          </div>
        ))}
      </div>
      <div className="right">
        {data.map((elem, index) => (
          <div className="marginTop30 exp-container" key={index}>
            <div style={{ width: "170px" }}>
              <h3 className="color-pink" >{elem?.time}</h3>
            </div>
            <div className="exp-details">
              <h3>{elem?.position}</h3>
              <p className="marginTop10">{elem?.comapny}</p>
              <p className="marginTop10">{elem?.details}</p>
            </div>
          </div>
        ))}
      </div>
      </AnimatedPage>
  );
};

export default Experience;
