import React from "react";
import AnimatedPage from "../../components/ui/AnimatedPage";

import {
  About,
  Navbar,
  Info,
  Experience,
  Project,
  Contact,
  Footer,
} from "./component";
import Check from "./component/check/check";

const Home = () => {
  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <div style={{ height: "100%" }}>
        <Info />
        <AnimatedPage id="About" className="page-container">
          <About />
        </AnimatedPage>

        <Experience />
        
        <Project />
        <Contact />
        <Footer />
        <Check />
      </div>
    </div>
  );
};

export default Home;
