import { TOGGLE} from "./burgerMenuActions";

const INITIAL_STATE = {
  toggle: false
};

const burguerMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        toggle: !state.toggle,
      };

    default:
      return state;
  }
};

export default burguerMenuReducer;