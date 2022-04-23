import { combineReducers } from "redux";
import galleryReducer from './galleryReducer';
import imageDetailsReducer from "./imageDetailsReducer";

const reducer = combineReducers({
  gallery: galleryReducer,
  imageDetails: imageDetailsReducer
});

export default reducer;