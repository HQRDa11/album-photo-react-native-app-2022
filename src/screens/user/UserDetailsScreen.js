import { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native"
import { ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/native'

const Details = ({ user }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("AlbumList", { userId: user.id });
  }
  return (
    <View>
      <Text>les détails d'utilisateur</Text>
      <Text>{user.name}</Text>
      <Button title="Voir Albums photo" onPress={onPress} />
    </View>
  )
}
const UserDetailsScreen = ({ route }) => {
  // console.log(route.params.id);
  const id = route.params.id;
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const loadUser = async (id) => {
    setLoading(true)
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
      // console.log(res.status);
      if (res.status !== 200) {
        Alert.alert("Erreur", "Echec de récupération de données !", [{
          text: "OK", style: "default"
        }])
      }
      const newUser = await res.json();
      setUser(newUser);
      setLoading(false)
    } catch (error) {
      Alert.alert("Erreur", "Echec de récupération des données !", [{
        text: "OK", style: "default"
      }])
    }

  }
  useEffect(() => {
    loadUser(id);
  }, [id]);

  return (
    <View style={[styles.container, styles.horizontal]}>
      {loading ? <ActivityIndicator size="large" color="red" /> : <Details user={user} />}
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
export default UserDetailsScreen