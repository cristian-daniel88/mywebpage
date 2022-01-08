import { CHANGE_DONE } from "./doneActions";


const INITIAL_STATE = {
  done: false
};

const doneReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_DONE:
      return {
        ...state,
        done: !state.done,
      };

    default:
      return state;
  }
};

export default doneReducer;
