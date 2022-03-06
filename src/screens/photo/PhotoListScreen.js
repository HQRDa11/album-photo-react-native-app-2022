import PhotoList from "../../components/photo/PhotoList"

const PhotoListScreen = ({ route }) => {
  const albumId = route.params.albumId;
  return (
    <PhotoList albumId={albumId} />
  )
}
export default PhotoListScreen