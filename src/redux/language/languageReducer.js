import { CHANGE_LANGUAGE } from "./languageActions";

const INITIAL_STATE = {
  english: true
};

const languageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        english: !state.english,
      };

    default:
      return state;
  }
};

export default languageReducer;
