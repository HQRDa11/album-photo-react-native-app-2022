import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';
const AlbumDetails = ({ album }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("PhotoList", { albumId: album.id });
  }
  return (
    <View style={{ justifyContent: "space-around" }}>
      <Text style={styles.textStyle}>les détails d'album</Text>
      <Text>{album.title}</Text>
      <Button title="Voir les photos" onPress={onPress} />
    </View>
  )
}
const styles = StyleSheet.create({
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
})
export default AlbumDetails;