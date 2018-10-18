import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/site/Header'
import Footer from './components/site/Footer'
import Sidebar from './components/site/Sidebar'
import {
  BrowserRouter as Router,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>    
        <Header /> 
        <Router>  
          <Sidebar />
        </Router>
        <Footer />
      </div>
    );
  }/*^^all the stuff in here is in the router which is a package that connects to the dom*/
}

export default App;

//route -- this is exact pathing, each one will only have one child component
//switch -- one thing shows up at the same time, kind of extra assurance that we don't have unintention components render at 
//link -- how we get to where we are going without using anchor tabs, it will then direct our page to that spot