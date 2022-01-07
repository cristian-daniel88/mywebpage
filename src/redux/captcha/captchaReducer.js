import { CAPTCHA_ERROR, CAPTCHA } from "./captchaActions";


const INITIAL_STATE = {
 
  error: null 
};

const captchaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
 

      case CAPTCHA_ERROR:
      return {
        ...state,
        error: action.payload,
      };



    default:
      return state;
  }
};

export default captchaReducer;