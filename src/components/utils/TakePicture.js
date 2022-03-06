import React, { useEffect, useRef, useState } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { Camera } from 'expo-camera'
import { useDispatch } from 'react-redux';
import { actionsCreators } from '../../../store';

export default function TakePicture({ navigation }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const camera = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    })();
  }, []);
  const takePicture = async () => {
    const photo = await camera.current.takePictureAsync()
    console.log(photo);
    dispatch(actionsCreators.setCurrentPhoto(photo));
    navigation.goBack();
  }
  if (hasCameraPermission === null) {
    return <Text>Waiting for permission…</Text>
  }
  if (hasCameraPermission === false) {
    return <Text>We need permission to access camera.</Text>
  }
  return (
    <View style={styles.container}>
      <Camera
        ref={camera}
        style={styles.camera}
        type={Camera.Constants.Type.back}
      />
      <Button title="Take picture" onPress={takePicture} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
})

