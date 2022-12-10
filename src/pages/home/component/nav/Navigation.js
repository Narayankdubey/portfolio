import * as React from "react";
import { motion } from "framer-motion";
import * as Unicons from '@iconscout/react-unicons';

import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({ open, toggle }) => (
  <motion.ul variants={variants} style={{ height: open ? "auto" : 0, overflow: "hidden" }}>
    {itemIds.map((item, i) => (
      <MenuItem i={i} key={i} name={item.name} icon={item.icon} toggle={toggle} />
    ))}
  </motion.ul>
);

const itemIds = [
  { name: "Home", icon: <Unicons.UilHome className="social-icons-svg" style={{width:"30px"}}/> },
  { name: "About", icon: <Unicons.UilInfoCircle className="social-icons-svg" style={{width:"30px"}}/> },
  { name: "Project", icon: <Unicons.UilFastMail className="social-icons-svg" style={{width:"30px"}}/> },
  { name: "Contact", icon: <Unicons.UilFastMail className="social-icons-svg" style={{width:"30px"}}/> },
];
