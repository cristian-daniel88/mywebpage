import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import burguerMenuReducer from "./burguerMenu/burguerMenuReducer";

//reducers
import languageReducer from "./language/languageReducer";


const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: [],
  };
  
  const rootReducer = combineReducers({
      language: languageReducer,
      burger: burguerMenuReducer
  
   
   
  });
  
  export default persistReducer(persistConfig, rootReducer);
  






