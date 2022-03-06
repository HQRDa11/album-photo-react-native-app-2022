import { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native"
import { ActivityIndicator } from "react-native";
import AlbumDetails from "../../components/album/AlbumDetails";

const AlbumDetailsScreen = ({ route }) => {
  const id = route.params.id;
  const [album, setAlbum] = useState({});
  const [loading, setLoading] = useState(false);
  const loadAlbum = async (id) => {
    setLoading(true)
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/albums/" + id);
      // console.log(res.status);
      if (res.status !== 200) {
        Alert.alert("Erreur", "Echec de récupération de données !", [{
          text: "OK", style: "default"
        }])
      }
      const newAlbum = await res.json();
      setAlbum(newAlbum);
      setLoading(false)
    } catch (error) {
      Alert.alert("Erreur", "Echec de récupération des données !", [{
        text: "OK", style: "default"
      }])
      setLoading(false)
    }

  }
  useEffect(() => {
    loadAlbum(id);
  }, []);

  return (
    <View style={[styles.container, styles.horizontal]}>
      {loading ? <ActivityIndicator size="large" color="red" /> : <AlbumDetails album={album} />}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
export default AlbumDetailsScreen