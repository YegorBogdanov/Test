import React, { useState } from 'react';
import { Resizable } from "re-resizable";
import Draggable from 'react-draggable';
import { useDispatch } from 'react-redux';
import { setScreen } from '../../redux/actions';


function Round({ name, onScreen, position, screenNum }) {

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 2px #212A47",
    background: "#425592",
    position: "absolute",
    borderRadius: '5%',
    top: window.innerWidth / 2 + position.y,
    left: window.innerHeight / 2 + position.x
  }

  const [deltaPosition, setDeltaPosition] = useState(position)
  const dispatch = useDispatch();

  function handleDrag(e, ui) {
    const { x, y } = deltaPosition;
    setDeltaPosition({
      x: x + ui.deltaX,
      y: y + ui.deltaY,
    });
  };
  return (
    <Draggable
      handle=".handle"
      onDrag={handleDrag}
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
          <div style={{ width: '50%', height: '50%', borderRadius: '50%', backgroundColor: 'red' }}>
          </div>
        </div>
        <button onClick={() => dispatch(setScreen(name, screenNum, deltaPosition))} style={{ position: 'absolute', bottom: '10px', right: '10px' }}>{`переместить на ${onScreen === 1 ? " 2 " : " 1 "} экран`}</button>
        <div style={{ fontSize: '10px' }}>x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</div>
      </Resizable>
    </Draggable>
  )
}

export default Round