import { Text, View } from "react-native";
import AlbumList from "../../components/album/AlbumList";

export default function AlbumListScreen({ route }) {
  const albumId = route.params.albumId;
  return (
    <AlbumList albumId={albumId} />
  )
}