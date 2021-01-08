// import logo from './logo.svg';
import React from 'react' ;
import './App.css';
import Home from "./pages/Home";
import Room from "./pages/Room";
import Error from "./pages/Error";
import Singleroom from "./pages/Singleroom";
import Navbar from './component/Navbar';

import {Route,Switch} from "react-router-dom";


function App() {
  return (<>

  <Navbar/>




  <Switch>

    <Route exact path="/" component={Home}/>
    <Route  exact path="/Room" component={Room}/>
    {/* <Route path="/Error" component={Error}/> */}
    <Route exact path="/Rooms/:slug" component={Singleroom}/>
    <Route component = {Error}/>
    
    
    
    </Switch>
    </>
   );
  
}

export default App;
