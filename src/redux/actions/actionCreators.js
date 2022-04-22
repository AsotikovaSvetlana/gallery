import {
  GET_IMAGES_REQUEST,
  GET_IMAGES_ERROR,
  GET_IMAGES_SUCCESS
} from './actionTypes';

export const getImagesRequest = () => (
  {type: GET_IMAGES_REQUEST}
)

export const getImagesError = () => (
  {type: GET_IMAGES_ERROR}
)

export const getImagesSuccess = (data) => (
  {type: GET_IMAGES_SUCCESS, payload: {data}}
)