import { useState } from "react";
import { View, Text, Button, Alert} from "react-native";

import { useDispatch } from "react-redux";
import { actionsCreators } from "../../../store";

import Input from "../../components/ui/Input";
import { Style } from "../../../GlobalStyles";

const UserAddScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const onAddPress = () => { // password is not stored
    if (nameInput.isValid 
      && emailInput.isValid 
      && passwordInput.isValid 
      && confirmPasswordInput.isValid){
      dispatch(actionsCreators.addUser(nameInput.value, emailInput.value));
      userRegisteredAlert();
    }
  }

  const userRegisteredAlert=()=>{ // Redirect currentUser to userListScreen after registration
    Alert.alert(
      'You have been Registered!',
      'You will be redirected to users list',
      [
        {text: 'Ok', onPress: () => navigation.goBack()}
      ],
      { 
        cancelable: false 
      }
    );
  }

  {/* NAME VALIDATION */}
  const [nameInput, setNameInput] = useState({
    value: "",
    isValid: false,
    errorMessage: "Minimum 4 characters."
  });
  const onChangeName = name => setNameInput(
  {...nameInput, value:name, isValid:(name.length>3)});
  
  {/* EMAIL VALIDATION */}
  const [emailInput, setEmailInput] = useState({
    value: "",
    isValid: false,
    errorMessage: "Invalid email adress"
  });
  const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  const onChangeEmail = email => setEmailInput(
  {...emailInput, value:email, isValid:emailReg.test(email)});

  {/* PASSWORD VALIDATION */}
  const [passwordInput, setPasswordInput] = useState({
    value: "",
    isValid: false,
    errorMessage: "At least one upper,lower,number,special. minSize: 8"
  });
  const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$\.!%*?&])[A-Za-z\d@$\.!%*?&]{8,}$/;
  const onChangePassword = password => setPasswordInput(
    {...passwordInput, value:password, isValid:passReg.test(password)});
  
  {/* CONFIRMPASSWORD VALIDATION */}
  const [confirmPasswordInput, setConfirmPasswordInput] = useState({
    value: "",
    isValid: false,
    errorMessage: "Password does not match"
  });
  const onChangeConfirmPassword = confirmPassword => setConfirmPasswordInput(
    {...confirmPasswordInput, value:confirmPassword, 
      isValid:(confirmPassword !=null 
        && confirmPassword !="" 
        && confirmPassword == passwordInput.value
      )
    }
  );


  return (
    <View style={Style.CONTAINER.WRAPPER_ROUNDED}>
      <Text style={Style.TITLE.LARGE}>Inscription</Text>
      
      {/* NAME INPUT */}
      <Input 
        label='Nom:'
        value={nameInput.value}
        onChangeText={onChangeName}
      />
      {!nameInput.isValid ? 
      <Text style={[Style.TITLE.LABEL,{color:'red'}]}>{nameInput.errorMessage}</Text> 
      : null }

      {/* EMAIL INPUT */}
      <Input 
        label='Email:'
        value={emailInput.value}
        onChangeText={onChangeEmail}
      /> 
      {!emailInput.isValid ?
        <Text style={[Style.TITLE.LABEL,{color:'red'}]}>{emailInput.errorMessage}</Text> 
        : null }

      {/* PASSWORD INPUT */}
      <Input 
        label='Password:'
        value={passwordInput.value}
        onChangeText={onChangePassword}
        otherOptions={{secureTextEntry:true}}
      /> 
      {!passwordInput.isValid ?
        <Text style={[Style.TITLE.LABEL,{color:'red'}]}>{passwordInput.errorMessage}</Text> 
        : null }

      {/* CONFIRM PASSWORD INPUT */}
      <Input 
        label='Confirm Password:'
        value={confirmPasswordInput.value}
        onChangeText={onChangeConfirmPassword}
        otherOptions={{secureTextEntry:true}}
      /> 
      {!confirmPasswordInput.isValid ?
        <Text style={[Style.TITLE.LABEL,{color:'red'}]}>{confirmPasswordInput.errorMessage}</Text> 
        : null }
      
     {/* CONFIRM/CANCEL BTNS*/}
      <View style={{flexDirection:'row',justifyContent:"space-around"}}>
        <Button title="Add User" onPress={onAddPress} color="blue" />
        <Button title="Cancel" onPress={()=>navigation.goBack()} color="red" />
      </View>

    </View>
  )
}
export default UserAddScreen