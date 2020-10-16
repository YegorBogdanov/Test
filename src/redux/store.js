import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { screenReducer } from './reducers';
import Round from '../components/Round';
import Square from '../components/Square';

const preloadState = [
  { component: Round, name: 'round', onScreen: 1 },
  { component: Square, name: 'square', onScreen: 1 }
]

const store = createStore(combineReducers({
  screens: screenReducer
}),
  { privet: 'privet' },
  composeWithDevTools(),
)

export default store