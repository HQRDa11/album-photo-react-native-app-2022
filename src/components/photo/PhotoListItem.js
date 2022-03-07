// src/components/photo/PhotoListItem.js 
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function PhotoListItem({ photo, showPhotoDetails }) {
  const navigation = useNavigation();
  // console.log(photo);
  const onPress = () => showPhotoDetails(photo.id);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.photo}>
        <Image
          source={{ uri: photo.thumbnailUrl }}
          style={{ width: 50, height: 50 }}
          resizeMode="cover" />
        <Text style={styles.text}>{photo.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  photo: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },
  text: {
    marginLeft: 10
  }
})

export default PhotoListItem