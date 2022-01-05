import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//reducers
import languageReducer from "./language/languageReducer";
import burguerMenuReducer from "./burguerMenu/burguerMenuReducer";
import changeProjectReducer from "./changeProject/changeProjectReducer";


const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: [],
  };
  
  const rootReducer = combineReducers({
      language: languageReducer,
      burger: burguerMenuReducer,
      project: changeProjectReducer
  
   
   
  });
  
  export default persistReducer(persistConfig, rootReducer);
  






