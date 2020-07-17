import React,  {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Parallaxe from './Parallaxe.js';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

class App extends Component {
render() {    
  return (
       <React.Fragment>
      <Nav.Link href="/personal-website/#/Parralaxe"></Nav.Link>
      <Router>
               <Switch>
               <Route exact path= "/Parallaxe" component={Parallaxe} />
               </Switch>
     </Router>
 </React.Fragment>
    
  );
}
}


export default App;
