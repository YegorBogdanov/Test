import React from 'react';
import '../../App.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Screen2() {
  const screenNum = 1
  const screenFill = useSelector((state) => state.screens)
  const components = screenFill.filter((component) => component.onScreen === 2)
  return (
    <>
      <button><Link to="/">Home</Link></button>
      <div className="App-header">
        {components.length > 0 && components.map(({ Component, name, onScreen, position }) => (
          <div key={name}>
            <Component name={name} onScreen={onScreen} position={position} screenNum={screenNum} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Screen2;