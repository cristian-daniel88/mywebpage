import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//reducers
import languageReducer from "./language/languageReducer";
import burguerMenuReducer from "./burguerMenu/burguerMenuReducer";
import changeProjectReducer from "./changeProject/changeProjectReducer";
import captchaReducer from "./captcha/captchaReducer";
import whatsAppEmailReducer from "./whatsappEmail/whatsappEmailReducer";
import doneReducer from "./done/doneReducer";
import pressSubmitReducer from "./pressSubmit/pressSubmitReducer";
import screenReducer from "./screen/screenReducer";


const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: [],
  };
  
  const rootReducer = combineReducers({
      language: languageReducer,
      burger: burguerMenuReducer,
      project: changeProjectReducer,
      captcha: captchaReducer,
      email: whatsAppEmailReducer,
      done: doneReducer,
      submit: pressSubmitReducer,
      screen: screenReducer
  });
  
  export default persistReducer(persistConfig, rootReducer);
  






