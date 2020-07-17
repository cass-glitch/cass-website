import React, {useState} from 'react';
import {Spring, useSpring, animated, config, useTransition} from 'react-spring/renderprops'

export const Toggle = (value) => {
    return (
        <Spring
            from = {{opacity: 2.0}}
            to = {{opacity: 0}}
            config= {{tension: 200, friction: 400, precision: 0.1}}
            >
        { props => (
            <div style = {props}>             
                      {value.children}
                      
            </div>        
        )}
        </Spring>
    )

}

