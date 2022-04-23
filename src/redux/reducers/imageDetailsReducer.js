import {
  GET_IMAGE_DETAILS,
  GET_IMAGE_DETAILS_ERROR,
  GET_IMAGE_DETAILS_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  image: [],
  loading: false,
  error: false
}

export default function imageDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGE_DETAILS:
      return {
        ...initialState,
        loading: true,
        error: false
      }
    case GET_IMAGE_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
    case GET_IMAGE_DETAILS_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        image: data,
        loading: false
      }
    default:
      return state;
  }
}