import { Button } from "react-native";
// import { Style } from "../../GlobalStyles";

export default function ButtonDefault({label, onPress, color = 'black', disabled}) {
  return (
    <Button title={label} onPress={onPress} color={color} disabled={disabled}/>
  );
}