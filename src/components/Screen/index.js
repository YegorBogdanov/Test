import React from 'react';
import '../../App.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Screen() {
  const screenNum = 1
  const screenFill = useSelector((state) => state.screens)
  const components = screenFill.filter((component) => component.onScreen === 2)
  console.log('components', components)
  console.log('screenFill', screenFill);

  return (
    <>
      <Link to="/">screen1</Link>
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