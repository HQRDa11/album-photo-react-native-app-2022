// src/components/user/UserListItem.js 
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function UserListItem({ user }) {
  const navigation = useNavigation();
  const onPress = () => navigation.navigate("UserDetails", { id: user.id })
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.user}>
        <Text>{user.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  user: {
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  }
})

export default UserListItem