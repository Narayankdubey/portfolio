import React from "react"
import { motion } from 'framer-motion';

const AnimatedPage = ({ children,className,id }) => {

  const animationStyles = {
    initial: { height: "100%", opacity: 1 },
    animate: { height: 0 },
    exit: { y: -10, opacity: 0 },
  }

  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      // transition: {
      //   type: "spring",
      //   bounce: 0.4,
      //   duration: 0.8
      // }
    }
  };

  return (
    <motion.div
      // className="check-card-container"
      className={className}
      id={id}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
    <motion.div
      variants={cardVariants}
      style={{width:"100%"}}
    >
      {children}
    </motion.div>
    </motion.div>

  )
};

export default AnimatedPage;
