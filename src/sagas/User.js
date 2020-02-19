import { call, put } from 'redux-saga/effects';
import { user } from '../services';
import * as UserActions from '../redux/User';


export function* getAll() {
  try {
    const users = yield call(user.getAll);
    yield put(UserActions.findUsersSuccess(users));
  } catch (error) {
    yield put(UserActions.findUsersFailure());
  }
}
