import React from 'react'

import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Home from './Home'
import Resources from './Resources'
 import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo'
 import JSXRules from '../concepts/JSXRules';
 import ClassComponentDemo from '../concepts/ClassComponentDemo';
 //import PropsDemo from '../concepts/PropsDemo';
 import ClockApp from '../walkthrough/Clock';
import NytApp from '../apps/nyt-app/NytApp';
//  import Timers from '../apps/timer-apps';


const Sidebar = () => (

  <div className="sidebar">
    <div className="sidebar-list-styling">
      <ul className="sidebar-list list-unstyled">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rationale">Rationale</Link></li>
        <li><Link to="/functionalcomponent">Functional Component</Link></li>
        <li><Link to= "/jsxrules">JSX Rules</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/classcomponentdemo">Class Component</Link></li>
        {/* <li><Link to="/propsdemo">Props Demo</Link></li> */}
        <li><Link to="/clockapp">clock app</Link></li>
        <li><Link to="/timer">Timers</Link></li>
        <li><Link to="/nytapp">NYT App</Link></li>



      </ul>
    </div>
    <div className="sidebar-route">
        <Switch>
            <Route exact path="/home"><Home /></Route>
            <Route exact path="/resources"><Resources /></Route>
            <Route exact path="/"><Home /></Route>
           <Route exact path="/functionalcomponent"><FunctionalComponentDemo /></Route>
          <Route exact path="/jsxrules"><JSXRules /></Route>
          <Route exact path="/classcomponentdemo"><ClassComponentDemo /></Route>
          {/* //<Route exact path="/propsdemo"> */}
          <Route exact path="/clockapp"><ClockApp /></Route>
          {/* <Route exact path="/timer"><TimePiecesApp /></Route> */}
          <Route exact path="/nytapp"><NytApp /></Route>
     <div>
        {/* <PropsDemo title='Beast Creature' author='Adam Smith' codepenUrl='https://codepen.io/Adamws33/pen/KZQxwJ' date='01/1/2018' />
        <PropsDemo title='Another Beast' author='Allison Summers' codepenUrl='https://codepen.io/Adamws33/pen/KZQxwJ' date='01/1/2018' />
        <PropsDemo title='Beast Mode' author='Andres Martin' codepenUrl='https://codepen.io/Adamws33/pen/KZQxwJ' date='01/1/2018' />
        <PropsDemo title='Beasty' author='Andrew Gunst' codepenUrl='https://codepen.io/Adamws33/pen/KZQxwJ' date='01/1/2018' /> */}
     </div> 
        </Switch>
    </div>
    </div>

)

export default Sidebar;

