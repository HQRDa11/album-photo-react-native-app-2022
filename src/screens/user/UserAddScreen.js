import React, { isValidElement } from "react";
import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";


import { Style } from "../../../GlobalStyles";
import { useDispatch } from "react-redux";
import { actionsCreators } from "../../../store";

const UserAddScreen = () => {
  const dispatch = useDispatch();
  const onAddPress = () => {
    dispatch(actionsCreators.addUser(name));
    dispatch(actionsCreators.setAddMode(false));
  }
  const onCancelPress = () => dispatch(actionsCreators.setAddMode(false))
  const [name, setName] = useState("");
  const onChangeName = (name) => setName(name);

  
  

  return (
     <View style={Style.CONTAINER.WRAPPER_ROUNDED}>
       <Text style={Style.TITLE.LARGE}>Inscription</Text>
       <TextInput 
         label='Choisissez un nom:'
         value={name}
         onChangeText={onChangeName}
       />
       <TextInput 
         label='Email:'
         value={email}
         onChangeText={onChangeName}
       />
       
      <Button title="Cancel" onPress={onCancelPress} color="red" />
      <Button title="Add User" onPress={onAddPress} color="blue" />
     </View>
  )
}
export default UserAddScreen