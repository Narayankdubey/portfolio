import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "../../../../components";
import "./style.css";

const Project = () => {
  const [selectedId, setSelectedId] = useState(null);
  const items = [
    { id: 1, title: "Pragya RO System", subtitle: "A small e-commerce site for a shop.",tech:["React","Express","Material Ui"] },
    { id: 2, title: "Pragya RO System App", subtitle: "A small e-commerce app for a shop.",tech:["React-Native","Express"] },
  ];
  return (
    <div id="Project" className="page-container">
      <div className="width100">
        <h1>Project</h1>
      </div>
      <div className="projects-container">
        {items.map((item) => (
          <motion.div
            className="small card pointer"
            layoutId={item.id}
            onClick={() => setSelectedId(item)}
            key={item.id}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.img
              className="thumbnail"
              src="https://www.projectmanager.com/wp-content/uploads/2021/10/211014_Blog_Feature_Project_Environment-scaled.jpg"
            />
            <motion.h2>{item.title}</motion.h2>
            <motion.h5>{item.subtitle}</motion.h5>
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedId && (
            <motion.div className="detail card " layoutId={selectedId?.id}>
               <motion.button
                  className="close-btn"
                  onClick={() => setSelectedId(null)}
                >
                  X
                </motion.button>
              <div className="detail-left">
                <motion.img
                  className="thumbnail"
                  src="https://www.projectmanager.com/wp-content/uploads/2021/10/211014_Blog_Feature_Project_Environment-scaled.jpg"
                />
              </div>
              <div className="detail-right">               
                <motion.h3>{selectedId?.title}</motion.h3>
                <motion.h5>{selectedId?.subtitle}</motion.h5>
                <motion.div>
                  {selectedId?.tech.map((elem,index)=>(<motion.p key={index}>{index+1}. {elem}</motion.p>))}      
                </motion.div>
                <motion.div>
                  <Button>Demo</Button>
                  <Button style={{marginLeft:"10px"}}>Code</Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Project;
