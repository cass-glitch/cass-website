import React,  {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Parallaxe from './Parallaxe.js';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
render() {    
  return (
      <Router>
               <Switch>
               <Route exact path= "/" component={Parallaxe} />
               </Switch>
     </Router>
    
  );
}
}


export default App;
