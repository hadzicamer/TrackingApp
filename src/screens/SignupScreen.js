import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { Context } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({ navigation }) => {

    const { state, signup } = useContext(Context);
  

    return (
        <View style={styles.container}>
          <AuthForm
          headerText="Sign up for tracker"
          errorMessage={state.errorMessage}
          ButtonText="Sign up"
          onSubmit={signup}/>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Text>Already have an account? Sign in instead</Text>
            </TouchableOpacity>
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 200
    },
  
});

export default SignupScreen;