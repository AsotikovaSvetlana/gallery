import {
  GET_IMAGES_REQUEST,
  GET_IMAGES_ERROR,
  GET_IMAGES_SUCCESS,
  GET_IMAGE_DETAILS,
  GET_IMAGE_DETAILS_SUCCESS,
  GET_IMAGE_DETAILS_ERROR
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

export const getImageDetails = (id) => (
  {type: GET_IMAGE_DETAILS, payload: {id}}
)

export const getImageDetailsSuccess = (data) => (
  {type: GET_IMAGE_DETAILS_SUCCESS, payload: {data}}
)

export const getImageDetailsError = () => (
  {type: GET_IMAGE_DETAILS_ERROR}
)