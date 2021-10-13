import React from 'react';
import './App.css'
import Home from './components/Home';
import {Route,Switch} from 'react-router-dom'
import Navber from './components/Navber';
import Registration from './components/Registration';
import Login from './components/Login';
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';

const App = () => {
  return (
    <>
    <Navber/>
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/abou">
      <About/>
    </Route>
    <Route path="/contact">
      <Contact/>
    </Route>
    <Route path="/login">
      <Login/>
    </Route>
    <Route path="/signup">
      <Registration/>
    </Route>
    <Route>
      <Error/>
    </Route>
    </Switch>
   
   
    </>
  );
};

export default App;