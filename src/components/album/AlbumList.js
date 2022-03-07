import { useEffect, useState } from "react";
import { FlatList } from "react-native"
import AlbumListItem from "./AlbumListItem"

function AlbumList({ userId }) {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadAlbums = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/albums/' + userId + "/albums");
      const newAlbums = await res.json();
      setAlbums(newAlbums);
    } catch (error) {
      alert("Network Error");
    }
    setLoading(false);
  }
  //componentDidMount
  useEffect(() => {
    loadAlbums();
  }, []);
  return (
    <FlatList
      data={albums}
      keyExtractor={album => String(album.id)}
      renderItem={({ item }) => (
        <AlbumListItem album={item} />
      )}
      refreshing={loading}
      onRefresh={loadAlbums}
    />
  )
}
export default AlbumList