import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import UserListContainer from '../userList.container.js'
import React from 'react'

describe('UserList container', () => {
  it('should render correctly', () => {
    // given
    const props = {
      nextPageExist: false,
    }

    const mockStore = configureStore()({
      usersList: {
        users: [],
        loading: false,
        error: false,
        emptyUsersList: false,
      },
    })

    // when
    const wrapper = renderer.create(
      <Provider store={mockStore}>
        <UserListContainer {...props} />
      </Provider>,
    )

    // then
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
