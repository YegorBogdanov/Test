import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import Screen from './components/Screen';

function App() {

  const screenNum = 2;
  const screenFill = useSelector((state) => state.screens)
  const components = screenFill.filter((component) => component.onScreen === 1)
  // console.log('innerWidth', window.innerWidth)
  // console.log('screenFill', screenFill);

  return (
    <>
      <Link to="/screen2">screen2</Link>
      <Switch>
        <Route path='/screen2'>
          <Screen />
        </Route>
      </Switch>
      <div className="App-header" style={{ backgroundColor: "blue" }}>
        {components.length > 0 && components.map(({ Component, name, onScreen, position }) => (
          <div key={name}>
            <Component name={name} onScreen={onScreen} position={position} screenNum={screenNum} />
          </div>
        ))}
      </div>
    </>
  )
}

export default App;
