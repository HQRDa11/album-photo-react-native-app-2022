import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";

const UserDetails = ({ user }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("AlbumList", { userId: user.id });
  }
  return (
    <View style={{ justifyContent: "space-around", alignItems: "center" }}>
      <Text style={styles.textStyle}>les détails d'utilisateur</Text>
      <Text>{user.name}</Text>
      <Button title="Voir Albums photo" onPress={onPress} />
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
export default UserDetails