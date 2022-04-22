import { takeEvery, put, call } from 'redux-saga/effects'
import { getData } from "../../api";
import { GET_IMAGES_REQUEST } from '../actions/actionTypes';
import { getImagesSuccess, getImagesError } from '../actions/actionCreators';
import { addCategoryField } from '../../utils/addCategoryField';

const delay = () => new Promise((resolve, reject) => setTimeout(resolve, 500));

export function* sagaWorker() {
  try {
    const { data } = yield call(getData);
    const images = yield addCategoryField(data);
    yield delay();
    yield put(getImagesSuccess(images));
  } catch (error) {
    yield put(getImagesError());
  }
}

export function* sagaWatcher() {
  yield takeEvery(GET_IMAGES_REQUEST, sagaWorker);
}

export default function* rootSaga() {
  yield sagaWatcher();
}