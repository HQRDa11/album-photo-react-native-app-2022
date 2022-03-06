// src/components/album/AlbumListItem.js 
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function AlbumListItem({ album }) {
  const navigation = useNavigation();
  const onPress = () => navigation.navigate("AlbumDetails", { id: album.id })
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.album}>
        <Text>{album.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  album: {
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  }
})

export default AlbumListItem