import { call, put } from 'redux-saga/effects';
import { user } from '../services';
import * as UserActions from '../redux/User';
import { t } from '../i18n';

export function* getAll() {
  try {
    const users = yield call(user.getAll);
    yield put(UserActions.findUsersSuccess(users));
  } catch (error) {
    yield put(UserActions.findUsersFailure());
  }
}

export function* insert({ payload }) {
  try {
    const users = yield call(user.insert, payload);
    yield put(UserActions.addUserSuccess(users));
  } catch (error) {
    yield put(UserActions.addUserFailure());
    alert(t('createError'));
  }
}
