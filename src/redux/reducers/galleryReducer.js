import {
  GET_IMAGES_REQUEST,
  GET_IMAGES_ERROR,
  GET_IMAGES_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  images: [],
  loading: false,
  error: false
}

export default function galleryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      }
    case GET_IMAGES_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
    case GET_IMAGES_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        images: data,
        loading: false
      }
    default:
      return state;
  }
}