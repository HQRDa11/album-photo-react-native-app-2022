import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Button, StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import UserList from './src/components/user/UserList';
import UserListScreen from './src/screens/user/UserListScreen';
import UserAddScreen from './src/screens/user/UserAddScreen';
import UserDetailsScreen from './src/screens/user/UserDetailsScreen';
import AlbumListScreen from './src/screens/album/AlbumListScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='UserList' component={UserListScreen} options={({ navigation }) => ({
          headerRight: () => <Button title="Add User" onPress={() => navigation.navigate("UserAdd")} />
        })} />
        <Stack.Screen name='UserAdd' component={UserAddScreen} />
        <Stack.Screen name='UserDetails' component={UserDetailsScreen} />
        <Stack.Screen name='AlbumList' component={AlbumListScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight || 0
  },
});
