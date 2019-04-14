// @flow

import { createAction } from 'redux-actions'
import type { Action } from '../types'

export const FETCH_USERS_LIST = 'FETCH_USERS_LIST'
export const FETCH_USERS_LIST_SUCCEEDED = 'FETCH_USERS_LIST_SUCCEEDED'
export const FETCH_USERS_LIST_FAILED = 'FETCH_USERS_LIST_FAILED'

export const fetchUserListAction = createAction(FETCH_USERS_LIST)
export const fetchUserListActionSucceeded = createAction(FETCH_USERS_LIST_SUCCEEDED)
export const fetchUserListActionFailed = createAction(FETCH_USERS_LIST_FAILED)

const emptyUsersReducer = {
  users: [],
  loading: false,
  error: false,
  emptyUsersList: false,
}

export const UsersReducer = (state: Object = emptyUsersReducer, action: Action<any>) => {
  switch (action.type) {
    case FETCH_USERS_LIST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_USERS_LIST_SUCCEEDED:
      return {
        ...state,
        loading: false,
        emptyUsersList: action.payload.length === 0,
        users: [...state.users, ...action.payload],
      }
    case FETCH_USERS_LIST_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      }
    default:
      return state
  }
}
