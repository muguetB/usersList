// @flow

import { UsersReducer } from '../userList/redux'

export default function createReducers() {
  return {
    usersList: UsersReducer,
  }
}
