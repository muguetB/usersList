// @flow

import React, { PureComponent } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import type { User } from '../types'
import UserListElement from './userListElement'
import { connect } from 'react-redux'

type Props = {
  onPageChange: Function,
  itemsPerPage: number,
  users: User[],
  loading: boolean,
}

class UserList extends PureComponent<Props, {}> {
  onEndReachedCalledDuringMomentum: boolean

  constructor(props) {
    super(props)
    this.onEndReachedCalledDuringMomentum = true
  }

  loadingMoreUsers = (): void => {
    if (!this.onEndReachedCalledDuringMomentum && !this.props.loading) {
      this.props.onPageChange()
      this.onEndReachedCalledDuringMomentum = true
    }
  }

  renderListItem = (item: User, index: number): React.ReactNode => {
    return (
      <UserListElement
        index={index}
        avatar={item.avatar}
        firstName={item.first_name}
        lastName={item.last_name}
      />
    )
  }

  renderFooter = (): React.ReactNode => {
    if (this.props.loading) {
      return (
        <View style={styles.footer}>
          <Text>Loading...</Text>
        </View>
      )
    }
    return <View style={styles.footer} />
  }

  render(): React.ReactNode {
    if (this.props.users.length !== 0) {
      return (
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.props.users}
            renderItem={({ item, index }: { item: User, index: number }) =>
              this.renderListItem(item, index)
            }
            keyExtractor={(item: User) => item.id.toString()}
            ListFooterComponent={this.renderFooter}
            onEndReachedThreshold={50}
            onMomentumScrollBegin={() => {
              this.onEndReachedCalledDuringMomentum = false
              this.loadingMoreUsers()
            }}
          />
        </View>
      )
    }
    return (
      <View>
        <Text>Waiting for data</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 25,
    alignItems: 'center',
  },
})

const mapStateToProps = state => {
  return {
    users: state.usersList.users,
    loading: state.usersList.loading,
  }
}

export default connect(
  mapStateToProps,
  {},
)(UserList)
