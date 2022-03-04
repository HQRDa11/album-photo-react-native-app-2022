import { useEffect, useState } from "react";
import { FlatList } from "react-native"
import UserListItem from "./UserListItem"

function UserList(props) {
  const [users, setUsers] = useState([]);
  const loadUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const newUsers = await res.json();
    setUsers(newUsers);
  }
  //componentDidMount
  useEffect(() => {
    try {
      loadUsers()
    } catch (error) {
      console.log(error);
    }
    return () => {
      // cleanup
    };
  }, []);
  return (
    <FlatList
      data={users}
      keyExtractor={user => String(user.id)}
      renderItem={({ item }) => (
        <UserListItem user={item} />
      )}
    />
  )
}
export default UserList