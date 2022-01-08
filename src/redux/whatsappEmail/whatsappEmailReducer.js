import { CHANGE_EMAIL } from "./whatsappEmailActions";

const INITIAL_STATE = {
  email: false
};

const whatsAppEmailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return {
        ...state,
        email: !state.email,
      };

    default:
      return state;
  }
};

export default whatsAppEmailReducer;
