import React,  {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Parallaxe from './Parallaxe.js';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

class App extends Component {
render() {    
  return (
     <Parallaxe />
    
  );
}
}


export default App;
