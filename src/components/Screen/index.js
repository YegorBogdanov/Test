import React from 'react';
import '../../App.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Screen() {
  const screenNum = 2
  const screenFill = useSelector((state) => state.screens)
  const components = screenFill.filter((component) => component.onScreen === 1)
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

export default Screen;