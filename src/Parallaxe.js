import React, { Component ,render, useRef, useState } from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import Styles from './Parallaxe.css';
import ReactDOM from 'react-dom';
import {Graduation} from './Assets/Graduation.jpg';
import {Helping} from './Assets/Helping.jpg';
import {Photo1} from './Assets/Photo1.jpg';
import {Photo2} from './Assets/Photo2.jpg';
import {Photo3} from './Assets/Photo3.jpg';
import {Photo4} from './Assets/Photo4.jpg';
import {Photo7} from './Assets/Photo7.jpg';
import {Photo8} from './Assets/Photo8.jpg';
import {Layout} from './Layout';
import {Slideright} from './Slideright';
import Zoom from 'react-reveal/Zoom';
import {useTransition, animated} from 'react-spring';
import {Toggle} from './Toggle';
import posed from 'react-pose';
import { Motion } from './Motion';


class Parralax extends React.Component {
    render() {
        const Box = posed.div({
    hoverable: true,
     init: { scale: 1 },
     hover: { scale: 1.2 },
      pressable: true,
      init: { scale: 1 },
      press: { scale: 0.8 }
    });
    
  return (
      <React.Fragment>
      <Parallax pages={10} ref={ref => (this.parallax = ref)} class = "parr" style = {{ width: '100%' ,
    height: '100%'}}>
<Layout>

    <ParallaxLayer offset = {0} speed = {0} factor = {10} style={{ backgroundColor: '#000000', opacity: 1}} />

    <ParallaxLayer offset = {0} speed = {-.2}>
        
    <span style = {{ marginLeft: '0%'}} class = {"Image8"}>
        <img src={require('./Assets/Photo7.jpg')} class = {"Image8"} alt = "First Image"/>
    </span>   

    </ParallaxLayer>
        
    <ParallaxLayer offset = {1.359} speed = {-.2}>
    <span style = {{ marginLeft: '0%'}} class = {"Image"}>
        <img src={require('./Assets/Helping.jpg')} class = {"Image"} alt = "Helping at Boys and Girls Club"/>
    </span>    
    </ParallaxLayer>
    <Zoom when={true}>
    <ParallaxLayer offset = {3} speed = {-.2}>
    <span style = {{ marginLeft: '0%'}} class = {"Image4"}>
        <img src={require('./Assets/Photo4.jpg')} class = {"Image4"} alt = "New York New York"/>
    </span>    
    </ParallaxLayer>
</Zoom>
    <Zoom when={true}>
    <ParallaxLayer offset = {3} speed = {-.2}>
    <span style = {{ marginLeft: '53%'}} class = {"Image1"}>
        <img src={require('./Assets/Photo1.jpg')} class = {"Image1"} alt = "New York Me"/>
    </span>    
    </ParallaxLayer>
    
    <ParallaxLayer offset = {3.5} speed = {-.2}>
    <span style = {{ marginLeft: '53%'}} class = {"Image2"}>
        <img src={require('./Assets/Photo2.jpg')} class = {"Image2"} alt = "New York boat pic"/>
    </span>    
    </ParallaxLayer>
</Zoom>

<ParallaxLayer offset = {9.0} speed = {-.2}>
<span style = {{ marginLeft: '0%'}} class = {"Image9"}>
    <img src={require('./Assets/Photo9.jpg')} class = {"Image9"} alt = "Abstract Image New York Museum"/>
</span>    
</ParallaxLayer>
    
    
    <ParallaxLayer offset = {4.27} speed = {-.2}>
    <span style = {{ marginLeft: '0%'}} class = {"Chalkboard"}>
        <img src={require('./Assets/Best_ChalkBoard.jpg')} class = {"Chalkboard"} alt = "Chalkboard Nucleotides"/>
    </span>    
    </ParallaxLayer>
    
    <ParallaxLayer offset = {5.45} speed = {-.2}>
    <span style = {{ marginLeft: '30%'}} class = {"JHU1"}>
        <img src={require('./Assets/JHU1.jpg')} class = {"JHU1"} alt = "jonny hop building"/>
    </span>    
    </ParallaxLayer>
    <ParallaxLayer offset = {5.45} speed = {-.2}>
    <span class = {"JHU2"}>
        <img src={require('./Assets/JHU2.jpg')} class = {"JHU2"} alt = "jonny hop people friends"/>
    </span>    
    </ParallaxLayer>
    
    <ParallaxLayer offset = {6.20} speed = {-.2}>
    <span class = {"JHU3"}>
        <img src={require('./Assets/JHU3.JPG')} class = {"JHU3"} alt = "jonny hop helping person"/>
    </span>    
    </ParallaxLayer>
    
    
    
    
</Layout>
    <Slideright>
    <ParallaxLayer offset = {.9} speed = {-.1} class = {"header"}>
        <h1>
    Cassandra Seifert
    </h1>
    </ParallaxLayer>
    <ParallaxLayer offset = {.35} speed = {-.6} class = {"header3"}>
    <Toggle>
    <img src={require('./Assets/apl.png')} class = {"header3"} alt = "New York Apple"/>
    </Toggle>
    </ParallaxLayer>
    
    <ParallaxLayer offset = {.35} speed = {-.6} class = {"header3"}>
    <Slideright>
    <img src={require('./Assets/aplc.png')} class = {"header3"} alt = "New York Apple Change"/>
    </Slideright>
    </ParallaxLayer>

    
    <ParallaxLayer offset = {.2} speed = {-.1} style = {{ marginLeft: '80%'}}>
    <div class = {"header2"}>
        <h3>
    The journey from a small rural town to the skylines of New York, 
    and the desire to help others
        </h3>
    </div>
    </ParallaxLayer> 
    </Slideright>  
    
    <ParallaxLayer offset = {1.5} speed = {-.4} style = {{ marginLeft: '85%'}}>
    <div class = {"header2"}>
        <h3>
    Here I am helping at the Boys and Girls Club!  
    </h3>
    </div>    
    </ParallaxLayer>
    
    <ParallaxLayer offset = {1.38} speed = {-.2} style = {{ marginLeft: '10%'}}>
<h1>
Hagerstown, MD
</h1>
    </ParallaxLayer>
    
    <ParallaxLayer offset = {2.8} speed = {-.2} style = {{ marginLeft: '10%'}}>
<h1>
New York, New York
</h1>
    </ParallaxLayer>
    <ParallaxLayer offset = {4.27} speed = {-.2} style = {{ marginLeft: '10%'}}>
<h1>
Academics
</h1>
    </ParallaxLayer>
    <ParallaxLayer offset = {5.45} speed = {-.2} style = {{ marginLeft: '10%'}}>
<h1>
Johns Hopkins University
</h1>
    </ParallaxLayer>
    


<ParallaxLayer offset = {2.82} speed = {-.2} style = {{ marginLeft: '30%'}}>
    <span onClick={() => this.parallax.scrollTo(4.29)}>
         <Box className="Circle" />
    </span>
</ParallaxLayer>

<ParallaxLayer offset = {1.4} speed = {-.2} style = {{ marginLeft: '26.5%'}}>
    <span onClick={() => this.parallax.scrollTo(3.00)}>
         <Box className="Circle" />
    </span>
</ParallaxLayer>
<ParallaxLayer offset = {4.29} speed = {-.2} style = {{ marginLeft: '20.5%'}}>
    <span onClick={() => this.parallax.scrollTo(5.47)}>
         <Box className="Circle" />
    </span>
</ParallaxLayer>
<ParallaxLayer offset = {5.47} speed = {-.2} style = {{ marginLeft: '34%'}}>
    <span onClick={() => this.parallax.scrollTo(6.3)}>
         <Box className="Circle" />
    </span>
</ParallaxLayer>
         
         


<ParallaxLayer offset = {9.92} speed = {0}>
<span style = {{ marginLeft: '30%'}}>
    <h2>
    By Tim Seifert, 2020, powered by react-spring
</h2>
</span>    
</ParallaxLayer>

</Parallax>
</React.Fragment>


)}

}

export default Parralax;


ReactDOM.render(<Parralax />, document.getElementById('root'))
    