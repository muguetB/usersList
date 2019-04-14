import React, { PureComponent } from 'react'
import { fetchUserListAction } from './redux'
import { connect } from 'react-redux'
import UserList from './userList.componet'
import { Text, View, StyleSheet } from 'react-native'

type Props = {
  nextPageExist: boolean,
}

type State = {
  page: number,
}

class UserListContainer extends PureComponent<Props, State> {
  state = {
    page: 1,
  }

  componentWillMount(): void {
    this.props.fetchUserListAction(this.state.page)
  }

  fetchMoreUsers = (): void => {
    if (this.props.nextPageExist) {
      this.setState(
        {
          page: this.state.page + 1,
        },
        () => {
          this.props.fetchUserListAction(this.state.page)
        },
      )
    }
  }

  render(): React.ReactNode {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Jesteś na stronie {this.state.page}</Text>
        </View>
        <UserList itemsPerPage={5} onPageChange={this.fetchMoreUsers} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 45,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
  },
})

const mapStateToProps = state => {
  return {
    nextPageExist: !state.usersList.emptyUsersList,
  }
}

const mapDispatchToProps = {
  fetchUserListAction,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserListContainer)
