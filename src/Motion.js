import React, {useState} from 'react';
import { motion, useViewportScroll, useTransform } from "framer-motion";
export function Motion({ children }) {
    
    const { scrollYProgress } = useViewportScroll();
    const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1.5]);
    const xPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1600, 800]);
    
    return(
        <motion.div style={{
        scale: scaleAnim,
        backgroundColor:'black',
        margin: '10px',
        height: 'auto'
        }}>
        <p style={{ marginLeft: '50%', color: 'white', marginTop: '50%',width: '150px',
        height: '200px',
        margin: '10px' }}>
            {children}
        </p>
        </motion.div>
        
        
    )
}