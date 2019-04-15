// @flow
import 'react-native'
import React from 'react'
import UserList from '../userList.componet'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

describe('UserList component', () => {
  it('should render correctly', () => {
    // given
    const props = {
      onPageChange: jest.fn(),
      itemsPerPage: 5,
      users: [],
      loading: false,
    }

    const mockStore = configureStore()({
      usersList: { users: [], loading: false, error: false, emptyUsersList: false },
    })

    // when
    const wrapper = renderer.create(
      <Provider store={mockStore}>
        <UserList {...props} />
      </Provider>,
    )

    // then
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
