import React from 'react'
import { motion } from "framer-motion"
import "./style.css"

const LfBox = ({ children, delay = 0, type = "lf", style = {}, className = "" }) => {
  const isLf = type === "lf" ? true : false;
  return (
    <motion.div
      initial={{ opacity: 0, x: isLf ? 100 : -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: false }}
      className={`box-style ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export default LfBox