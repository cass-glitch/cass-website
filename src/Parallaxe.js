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

<ParallaxLayer offset = {9.5} speed = {-.2}>
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
    <ParallaxLayer offset = {7.22} speed = {-.2}>
    <span class = {"Scott1"}>
        <img src={require('./Assets/Scotty1.jpg')} class = {"JHU3"} alt = "jonny hop helping person"/>
    </span>    
    </ParallaxLayer>
    
    <ParallaxLayer offset = {7.22} speed = {-.2}>
    <span class = {"Scott3"}>
        <img src={require('./Assets/Scotty3.jpg')} class = {"JHU3"} alt = "jonny hop helping person"/>
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
    
    <ParallaxLayer offset = {1.5} speed = {-.5} style = {{ marginLeft: '10%'}}>
    <div class = {"header4"}>
        <h3>
    The journey starts in Hagerstown, MD, a small city in western Maryland. Here 
    as the president of my schools NHS, I created an affiliation with local Boys and
    Girls club to volunteer. Here I gained a deep appreaciation for helping others. 
    Coming in almost everyday after school, I would teach math, help with english essays,
    and most importantly talk to the kids of the club!
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
    <ParallaxLayer offset = {3.5} speed = {.5} style = {{ marginLeft: '15%'}}>
    <div class = {"header4"}>
        <h3>
    During the summer of my Sophmore year at University I worked at NYU Langone health 
    as intern where I worked with Doctors and patients. In the big apple, I explored real
    healthcare workers interactions. Running into the street to take an iconic picture,
    I made lifelong friends along the way.
    </h3>
    </div>    
    </ParallaxLayer>
    
    
    <ParallaxLayer offset = {4.27} speed = {-.2} style = {{ marginLeft: '10%'}}>
<h1>
Academics
</h1>
    </ParallaxLayer>
    
    <ParallaxLayer offset = {4.5} speed = {.6} style = {{ marginLeft: '15%'}}>
    <div class = {"header4"}>
        <h3>
My academic journye begins in High School where I earned both the state and IB diploma. 
Additionally I graduated as the valedictorian of my class. From here I my academic
journey went to Johns Hopkins University. Here I'm majoring in Biology and creative
writing. Behind this text is just a little glimpse into the academic work I do on a daily basis.
    </h3>
    </div>    
    </ParallaxLayer>
    
    <ParallaxLayer offset = {5.45} speed = {-.2} style = {{ marginLeft: '10%'}}>
<h1>
Johns Hopkins University
</h1>
    </ParallaxLayer>
    
    <ParallaxLayer offset = {5.48} speed = {-.3} style = {{ marginLeft: '15%'}}>
    <div class = {"header4"}>
        <h3>
My academic journye begins in High School where I earned both the state and IB diploma. 
Additionally I graduated as the valedictorian of my class. My academic
journey then went to Johns Hopkins University where I'm majoring in Biology and Creative
Writing. In addition to JHU's rigorous course classes I'm active in multiple clubs. Continuing
with my previous experiences at the Boys and Girls Club of Hagerstown, I now tutor kids
who are a apart of public school system in Baltimore.
    </h3>
    </div>    
    </ParallaxLayer>
    
    <ParallaxLayer offset = {7.2} speed = {-.2} style = {{ marginLeft: '10%'}}>
<h1>
Scottland
</h1>
    </ParallaxLayer>
    <ParallaxLayer offset = {7.5} speed = {-.3} style = {{ marginLeft: '15%'}}>
        <div class = {"header4"}>
<h3>
I studied abroad in my Junior year in Scottland at St. Andrews University. I worked with a 
childrens school, and we gave the kids teddy bears!
</h3>
    </div>   
    </ParallaxLayer>
    
    
    <ParallaxLayer offset = {8.24} speed = {-.2}>
    <span class = {"gorilla"}>
        <img src={require('./Assets/Photo3.jpg')} class = {"gorilla"} alt = "gorillas r cool"/>
    </span>    
    </ParallaxLayer>
    <ParallaxLayer offset = {8.6} speed = {-.2} style = {{ marginLeft: '10%'}}>
        <div class = {"header5"}>
<h4>
That's all, time to swing into the future like this gorilla. 
</h4>
</div>
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
         
    

<ParallaxLayer offset = {9.8} speed = {-.2} style = {{ marginLeft: '30%'}}>
    <div class = {"header5"}>
    <span onClick={() => this.parallax.scrollTo(.1)}>
        <h3>
        Scroll back to the top by clicking me!
        </h3>
    </span>
    </div>
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
    