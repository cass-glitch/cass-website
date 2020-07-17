import React, {useState} from 'react';
import {Spring, useSpring, animated, config, useTransition} from 'react-spring/renderprops'

export const Layout = (value) => {
return (
    <Spring
        from = {{opacity: 0, marginTop: -100}}
        to = {{opacity: 1, marginTop: 0}} >
    { props => (
        <div style = {props}>             
               {value.children}              
        </div>        
    )}
    </Spring>
)

}