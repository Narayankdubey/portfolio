import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { UilDownloadAlt } from "@iconscout/react-unicons";
import "./style.css";

import Resume from "../../../../assests/Resume.docx";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [open, setOpen] = React.useState("false");
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  React.useEffect(() => {
    if (isOpen) {
      setOpen(true);
    } else {
      setTimeout(() => {
        setOpen(false);
      }, 1000);
    }
  }, [isOpen]);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <div className="left-nav">
        <motion.div className="nav-background" variants={sidebar} />
        <Navigation open={open} toggle={toggleOpen} />
        <MenuToggle toggle={() => toggleOpen()} />
      </div>
      <div className="mid-nav">
        <h2 className="name-logo">Narayan Dubey</h2>
      </div>
      <div className="right-nav center">
        <a href={Resume} className="resume-download">
          <UilDownloadAlt />
          <div>
            <h3>Download</h3>
            <small>Resume</small>
          </div>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
