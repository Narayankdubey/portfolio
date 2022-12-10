import React from 'react'
import { motion } from "framer-motion"
import "./style.css"

const Button = ({ children, startIcon = "", endIcon = "", title = "",onClick=()=>{} }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.5 }}
      whileTap={{ scale: 0.95 }}
      className="styled-button"
      onClick={()=>onClick()}
    >
      <span className='space-between'>
        {startIcon}
        {title}
        {children}
        {endIcon}
      </span>
    </motion.button>
  )
}

export default Button