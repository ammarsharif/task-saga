import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { getAll } from '../features/reducer/user';

function* fetchUsers() {
  try {
    const response = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/posts'
    );
    yield put(getAll(response.data));
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

export function* userSaga() {
  yield takeLatest('UserData/fetchUsers', fetchUsers);
}
