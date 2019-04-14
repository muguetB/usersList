import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_USERS_LIST, fetchUserListActionFailed, fetchUserListActionSucceeded } from './redux'
import { fetchUsersService } from './service'
import type { Action } from '../types'

function* watchFetchUserList(): Generator<*, *, *> {
  yield takeLatest(FETCH_USERS_LIST, fetchUsers)
}

function* fetchUsers(action: Action<Object>) {
  try {
    const response = yield call(fetchUsersService, action.payload)
    yield put(fetchUserListActionSucceeded(response))
  } catch (error) {
    yield put(fetchUserListActionFailed)
  }
}

export default [watchFetchUserList]
