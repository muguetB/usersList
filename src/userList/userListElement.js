// @flow
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const UserListElement = ({
  avatar,
  firstName,
  lastName,
  index,
}: {
  avatar: string,
  firstName: string,
  lastName: string,
  index: number,
}) => {
  return (
    <View style={[styles.row, { backgroundColor: getItemColor(index) }]}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.text}>
        <Text>
          {firstName} {lastName}
        </Text>
      </View>
    </View>
  )
}

function getItemColor(index: number): string {
  return index % 2 === 0 ? '#E7E3E2' : '#FEFCFC'
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 45,
  },
  text: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginLeft: 10,
  },
})

export default UserListElement
