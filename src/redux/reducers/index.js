import { combineReducers } from "redux";
import galleryReducer from './galleryReducer';
import imageDetailsReducer from "./imageDetailsReducer";
import themeReducer from "./themeReducer"; 

const reducer = combineReducers({
  gallery: galleryReducer,
  imageDetails: imageDetailsReducer,
  theme: themeReducer
});

export default reducer;