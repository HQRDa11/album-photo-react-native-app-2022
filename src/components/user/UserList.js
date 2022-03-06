import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionsCreators } from "../../../store";
import UserListItem from "./UserListItem"

function UserList(props) {
  const dispatch = useDispatch();
  // const [users, setUsers] = useState([]);
  const users = useSelector(state => state.user.users)
  // const [loading, setLoading] = useState(false);
  const loading = useSelector(state => state.loading)
  const loadUsers = async () => {
    // setLoading(true);
    dispatch(actionsCreators.setAsyncOperationStart());
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const newUsers = await res.json();
      // setUsers(newUsers);
      dispatch(actionsCreators.loadUsers(newUsers));
      dispatch(actionsCreators.setAsyncOperationSuccess());
    } catch (error) {
      alert("Network Error");
      console.log(error);
      dispatch(actionsCreators.setAsyncOperationFailure());
    }
    // setLoading(false);
  }
  //componentDidMount
  useEffect(() => {
    loadUsers();
  }, []);
  return loading ? (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator />
    </View>) : (
    <FlatList
      data={users}
      keyExtractor={user => String(user.id)}
      renderItem={({ item }) => (
        <UserListItem user={item} />
      )}
      refreshing={loading}
      onRefresh={loadUsers}
    />
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
export default UserList