import { CHANGE_PRESS } from "./pressSubmitActions";


const INITIAL_STATE = {
  submit: false
};

const pressSubmitReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_PRESS:
      return {
        ...state,
        submit: !state.submit,
      };

    default:
      return state;
  }
};

export default pressSubmitReducer;
