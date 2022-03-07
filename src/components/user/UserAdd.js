import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { actionsCreators } from "../../../store";

export default function UserAdd(props){
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        addressStreet: "",
        addressSuite: "",
        addressCity: "",
        addressZipcode: "",
    });
    const [error, setError] = useState({
        name: true,
        username: true,
        email: true,
        addressStreet: true,
        addressSuite: true,
        addressCity: true,
        addressZipcode: true,
    });
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const onChange = (text, name)=>{
        switch (name) {
            case "name":
                if (text.length > 0) {
                    setError((error)=>({...error, name: false}))
                } else {
                    setError((error)=>({...error, name: true}))
                }
                break;
        
            default:
                break;
        }
        setUser(user=> ({...user, [name]: text}))
    }
    const onPress = ()=>{
        dispatch(actionsCreators.addUser(user));
        navigation.navigate("UserList")
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View>
                <TextInput 
                    value={user.name}
                    style={error.name ? [styles.textInput, styles.invalid] : [styles.textInput, styles.valid]}
                    textContentType="familyName"
                    maxLength={25} 
                    placeholder="Name" 
                    onChangeText={(text)=>onChange(text, "name")} 
                    autoFocus/>
                <TextInput 
                    value={user.username}
                    style={error.username ? [styles.textInput, styles.invalid] : [styles.textInput, styles.valid]}
                    textContentType="familyName"
                    maxLength={25} 
                    placeholder="Username" 
                    onChangeText={(text)=>onChange(text, "username")} />
                <TextInput 
                    value={user.email}
                    style={error.email ? [styles.textInput, styles.invalid] : [styles.textInput, styles.valid]}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    maxLength={255} 
                    placeholder="Email" 
                    onChangeText={(text)=>onChange(text, "email")} />
            </View>
            <View>
                <Text style={{alignSelf: "center", marginVertical: 15}}>Address:</Text>
                <TextInput 
                    value={user.addressStreet}
                    style={error.addressStreet ? [styles.textInput, styles.invalid] : [styles.textInput, styles.valid]}
                    textContentType="streetAddressLine1"
                    maxLength={70}
                    multiline
                    placeholder="Street address" 
                    onChangeText={(text)=>onChange(text, "addressStreet")}/>
                <TextInput 
                    value={user.addressSuite}
                    style={error.addressSuite ? [styles.textInput, styles.invalid] : [styles.textInput, styles.valid]}
                    textContentType="streetAddressLine2"
                    maxLength={40} 
                    placeholder="Suite" 
                    onChangeText={(text)=>onChange(text, "addressSuite")} />
                <TextInput 
                    value={user.addressCity}
                    style={error.addressCity ? [styles.textInput, styles.invalid] : [styles.textInput, styles.valid]}
                    textContentType="addressCity"
                    maxLength={40} 
                    placeholder="City" 
                    onChangeText={(text)=>onChange(text, "addressCity")} />
                <TextInput 
                    value={user.addressZipcode}
                    style={error.addressZipcode ? [styles.textInput, styles.invalid] : [styles.textInput, styles.valid]}
                    textContentType="postalCode"
                    keyboardType="number-pad"
                    maxLength={15} 
                    placeholder="Zipcode" 
                    onChangeText={(text)=>onChange(text, "addressZipcode")} />
            </View>
            <View style={styles.button} >
                <Button title="Add User" onPress={onPress}/>
            </View>
        </KeyboardAvoidingView>
        
    )
}
const styles = StyleSheet.create({
    container:{
        margin: 5
    },
    textInput: {
        padding:10,
        borderStyle:"solid",
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        marginBottom: 2
    },
    button:{
        marginTop: 20,
    },
    valid: {
        borderStyle:"solid",
        borderBottomColor: "green",
        borderBottomWidth: 2,
    },
    invalid: {
        borderStyle:"solid",
        borderBottomColor: "red",
        borderBottomWidth: 2,
    }
})