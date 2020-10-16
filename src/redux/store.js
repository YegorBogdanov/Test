import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { screenReducer } from './reducers';
import Round from '../components/Round';
import Square from '../components/Square';

const preloadState = [
  { Component: Round, name: 'round', onScreen: 1, position: { x: 0, y: 0 } },
  { Component: Square, name: 'square', onScreen: 1, position: { x: 0, y: 0 } }
]

const store = createStore(combineReducers({
  screens: screenReducer
}),
  {},
  composeWithDevTools(),
)

export default store