import { Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import UserListScreen from './src/screens/user/UserListScreen';
import UserAddScreen from './src/screens/user/UserAddScreen';
import UserDetailsScreen from './src/screens/user/UserDetailsScreen';
import AlbumListScreen from './src/screens/album/AlbumListScreen';
import AlbumDetailsScreen from './src/screens/album/AlbumDetailsScreen';
import PhotoListScreen from './src/screens/photo/PhotoListScreen';
import TakePicture from './src/components/utils/TakePicture';
import { Provider } from 'react-redux';
import store from './store';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='UserList' component={UserListScreen} options={({ navigation }) => ({
            headerRight: () => <Button title="Add User" onPress={() => navigation.navigate("UserAdd")} />
          })} />
          <Stack.Screen name='UserAdd' component={UserAddScreen} />
          <Stack.Screen name='UserDetails' component={UserDetailsScreen} />
          <Stack.Screen name='AlbumList' component={AlbumListScreen} />
          <Stack.Screen name='AlbumDetails' component={AlbumDetailsScreen} />
          <Stack.Screen name='PhotoList' component={PhotoListScreen} options={({ navigation }) => ({
            headerRight: () => <Button title="Add Photo" onPress={() => navigation.navigate("TakePicture")} />
          })} />
          <Stack.Screen name='TakePicture' component={TakePicture} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>


  );
}

