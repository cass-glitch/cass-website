import React, {useState} from 'react';
import {Spring, useSpring, animated, config, useTransition} from 'react-spring/renderprops'

export const Slideright = (value) => {
return (
    <Spring
        from = {{opacity: 0, Right: '300px'}}
        to = {{opacity: 1, Right: '0px'}}
        config= {{tension: 250, friction: 250, precision: 0.1}}
        >
    { props => (
        <div style = {props}>             
                  {value.children}
                  
        </div>        
    )}
    </Spring>
)

}