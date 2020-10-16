import { SET_SCREEN } from './action_types';
import Round from '../components/Round';
import Square from '../components/Square';

const preloadState = [
  { Component: Round, name: 'round', onScreen: 1 },
  { Component: Square, name: 'square', onScreen: 1 }
]

export function screenReducer(state = preloadState, action) {
  switch (action.type) {
    case SET_SCREEN:
      if (action.payload)
        return state.map((component) => {
          if (component.name === action.payload.componentName) {
            return { ...component, onScreen: action.payload.setOnScreen }
          }
          else return component
        })
    default:
      return state;
  }
}