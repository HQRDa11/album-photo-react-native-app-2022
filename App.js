import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import UserList from './src/components/user/UserList';

export default function App() {
  return (
    <View style={styles.container}>
      <UserList />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight || 0
  },
});
