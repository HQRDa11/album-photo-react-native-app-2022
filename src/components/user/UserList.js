import { useEffect, useState } from "react";
import { FlatList } from "react-native"
import UserListItem from "./UserListItem"

function UserList(props) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const newUsers = await res.json();
      setUsers(newUsers);
    } catch (error) {
      alert("Network Error");
    }
    setLoading(false);
  }
  //componentDidMount
  useEffect(() => {
    loadUsers();
  }, []);
  return (
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
export default UserList