import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Screen from './components/Screen';
import Screen2 from './components/Screen2';

function App() {
  return (
    <>
      <button><Link to="/screen1">screen1</Link></button>
      <button><Link to="/screen2">screen2</Link></button>
      <Switch>
        <Route path='/screen1'>
          <Screen />
        </Route>
        <Route path='/screen2'>
          <Screen2 />
        </Route>
      </Switch>
    </>
  )
}

export default App;
