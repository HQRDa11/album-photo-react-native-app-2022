import { StyleSheet, View, Text, TextInput } from "react-native";
import { Style } from "../../../GlobalStyles";

export default function Input({label, value, onChangeText, otherOptions}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, Style.TITLE.LABEL]}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        {...otherOptions}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderRadius: 4,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 40,
  },
  label: {
    position: 'absolute',
    top: -11,
    left: 20,
    backgroundColor: 'white',
    paddingRight: 5,
    paddingLeft: 5,
  },
})