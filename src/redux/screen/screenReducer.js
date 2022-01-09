import { SCREEN } from "./screenReducerAction";



const INITIAL_STATE = {
  screen: false
};

const screenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SCREEN:
      return {
        ...state,
        screen: !state.screen,
      };

    default:
      return state;
  }
};

export default screenReducer;
