import { SET_SCREEN } from './action_types';

export function setScreen(componentName, setOnScreen, position) {

  return (
    {
      type: SET_SCREEN,
      payload: {
        componentName,
        setOnScreen,
        position
      }
    }
  )
}