import { takeEvery, put, call, spawn } from 'redux-saga/effects'
import { getData, getImageInfo } from "../../api";
import { GET_IMAGES_REQUEST, GET_IMAGE_DETAILS } from '../actions/actionTypes';
import { getImagesSuccess, getImagesError, getImageDetailsSuccess, getImageDetailsError } from '../actions/actionCreators';
import { addCategoryField } from '../../utils/addCategoryField';

const delay = () => new Promise((resolve, reject) => setTimeout(resolve, 500));

export function* sagaGalleryWorker() {
  try {
    const { data } = yield call(getData);
    const images = yield addCategoryField(data);
    yield delay();
    yield put(getImagesSuccess(images));
  } catch (error) {
    yield put(getImagesError());
  }
}

export function* sagaImgDetailsWorker(action) {
  try {
    const { data } = yield call(getImageInfo, action.payload.id);
    yield delay();
    yield put(getImageDetailsSuccess(data));
  } catch (error) {
    yield put(getImageDetailsError());
  }
}

export function* sagaGalleryWatcher() {
  yield takeEvery(GET_IMAGES_REQUEST, sagaGalleryWorker);
}

export function* sagaImgDetailsWatcher() {
  yield takeEvery(GET_IMAGE_DETAILS, sagaImgDetailsWorker);
}

export default function* rootSaga() {
  yield spawn(sagaGalleryWatcher);
  yield spawn(sagaImgDetailsWatcher);
}