import { CHANGEPROJECT } from "./changeProjectActions";

const INITIAL_STATE = {
  toggle: true
};

const changeProjectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGEPROJECT:
      return {
        ...state,
        toggle: !state.toggle,
      };

    default:
      return state;
  }
};

export default changeProjectReducer;