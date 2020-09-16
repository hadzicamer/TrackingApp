import React, { useState, useContext } from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context} from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {

    const {state,signup}=useContext(Context);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign up</Text>
            </Spacer>
            <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none"/>
            <Spacer />
            <Input secureTextEntry={true} label="Password" value={password} onChangeText={setPassword} autoCapitalize="none" />
            {state.errorMessage?<Text style={styles.errorMessage}>{state.errorMessage}</Text>:null}
            <Spacer>
                <Button title="Sign up" onPress={()=>signup({email,password})} /> 
            </Spacer>
            <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
<Text>Already have an account? Sign in instead</Text>
            </TouchableOpacity>
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        header: null
    };
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        marginBottom:200
    },
    errorMessage:{
        fontSize:16,
        color:'red'
    }
});

export default SignupScreen;