import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
const Login = ()=>{
    const [login, setLogin] = useState({
        username: "",
        password: ""
    });
    const navigation=useNavigation();
    const onChange = (text, name)=>{
        setLogin((login)=>({...login, [name]: text}));
    }
    const onLogin = async ()=>{
        //on vérifie les identifiants
        //on stocke le currentUser dans le stockage local de l'application
        const currentUser = {
            username: login.username,
            lastLogin: new Date()
        }
        try {
            await AsyncStorage.setItem("current_user", JSON.stringify(currentUser));
        } catch (error) {
            console.error(error);
        }
        navigation.navigate("UserList");
    }
    return(
        <View>
            <TextInput 
                onChangeText={(text)=>onChange(text, "username")} 
                value={login.username} 
                placeholder="Username" 
                autoFocus
                textContentType="username"/>
            <TextInput 
                onChangeText={(text)=>onChange(text, "password")} 
                value={login.password} 
                placeholder="Password" 
                textContentType="password"
                secureTextEntry/>
            <Button title="login" onPress={onLogin}/>
        </View>
    )
}
export default Login;