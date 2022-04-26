import {
  SELECT_THEME
} from '../actions/actionTypes';

const initialState = {
  theme: 'dark'
}

export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_THEME:
      const { theme } = action.payload;
      return {
        ...initialState,
        theme
      }
    default:
      return state;
  }
}