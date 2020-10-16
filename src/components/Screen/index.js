import React from 'react';
import '../../App.css';
import { Resizable } from "re-resizable";
import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setScreen } from '../../redux/actions';

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 2px #212A47",
  background: "#425592",
  position: "absolute",
  borderRadius: '5%',
};

function Screen() {

  const dispatch = useDispatch();
  const screenFill = useSelector((state) => state.screens)
  const components = screenFill.map((component) => {
    if (component.onScreen === 1) {
      return component
    }
  })
  // console.log('components', components)
  // console.log(screenFill[0].component);
  return (
    <>
      <Link to='/'> screen1
</Link>
      <div className="App-header">

        {components.map(({ Component, name, onScreen }) => (
          <div key={name}>
            <Draggable
              handle=".handle"
            >
              <Resizable
                style={style}
                defaultSize={{
                  width: 200,
                  height: 200
                }}
              >
                <div className="handle"
                  style={{ width: '90%', height: '90%' }}>
                  <Component />
                </div>
                <button onClick={() => dispatch(setScreen(name, 1))} style={{ position: 'absolute', bottom: '10px', right: '10px' }}>{`переместить на ${onScreen === 1 ? " 2 " : " 1 "} экран`}</button>
              </Resizable>
            </Draggable>
          </div>
        ))}

      </div>
    </>
  )
}

export default Screen;