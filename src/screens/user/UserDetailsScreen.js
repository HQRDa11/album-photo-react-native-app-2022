import { useSelector } from "react-redux";
import UserDetails from "../../components/user/UserDetails";

const UserDetailsScreen = ({ route }) => {
  // console.log(route.params.id);
  const id = route.params.id;
  // const [user, setUser] = useState({});
  const user = useSelector(state => state.user.users.find((u) => u.id === id))
  return (
    <UserDetails user={user} />
  )
}
export default UserDetailsScreen