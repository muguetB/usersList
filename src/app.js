// @flow

import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import UserListContainer from './userList/userList.container'

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <UserListContainer />
    </Provider>
  )
}
