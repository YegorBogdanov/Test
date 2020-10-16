import { SET_SCREEN } from './action_types';
import Round from '../components/Round';
import Square from '../components/Square';

const preloadState = [
  { Component: Round, name: 'round', onScreen: 1, position: { x: 0, y: 0 } },
  { Component: Square, name: 'square', onScreen: 1, position: { x: 0, y: 0 } }
]

export function screenReducer(state = preloadState, action) {
  switch (action.type) {
    case SET_SCREEN:
      return state.map((component) => {
        if (component.name === action.payload.componentName) {
          return { ...component, onScreen: action.payload.setOnScreen, position: action.payload.position }
        }
        else return component
      })
    default:
      return state;
  }
}