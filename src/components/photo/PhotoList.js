import { useFocusEffect } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, FlatList, Image, Modal, Pressable, StyleSheet, Text, View } from "react-native"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { actionsCreators } from "../../../store";
import PhotoListItem from "./PhotoListItem"

function PhotoList({ albumId }) {
  const [photos, setPhotos] = useState([]);
  const [currentPhoto, setCurrentPhoto] = useState({});
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const photoToBeAdded = useSelector(state => state.currentPhoto)
  const dispatch = useDispatch();
  useFocusEffect(() => {
    if (photoToBeAdded) {
      const id = photos.length > 0 ? photos[photos.length - 1].id + 1 : 1000;
      setPhotos(photos => [...photos, { id: id, title: "test", url: photoToBeAdded.uri, thumbnailUrl: photoToBeAdded.uri }]);
      dispatch(actionsCreators.setCurrentPhoto(null));
    }
  })
  const loadPhotos = async (albumId) => {
    setLoading(true);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/albums/' + albumId + "/photos");
      const newPhotos = await res.json();
      setPhotos(newPhotos);
    } catch (error) {
      alert("Network Error");
    }
    setLoading(false);
  }
  //componentDidMount
  useEffect(() => {
    loadPhotos(albumId);
  }, []);
  const showPhotoDetails = (id) => {
    const currPhoto = photos.find((p) => p.id === id)
    setCurrentPhoto(currPhoto);
    setModalVisible(true);
  }
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{currentPhoto.title}</Text>
            <Image
              source={{ uri: currentPhoto.url }}
              style={{ width: 300, height: 300, marginVertical: 15 }} resizeMode="contain" />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Photo</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <FlatList
        data={photos}
        keyExtractor={photo => String(photo.id)}
        renderItem={({ item }) => (
          <PhotoListItem photo={item} showPhotoDetails={showPhotoDetails} />
        )}
        refreshing={loading}
        onRefresh={() => loadPhotos(albumId)}
      />
    </View>

  )
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  imageStyle: {
    width: '70%',
    height: '60%'
  }
});
export default PhotoList