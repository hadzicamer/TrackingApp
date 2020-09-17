import React,{useContext} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import{NavigationEvents} from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/navLink';
import {Context} from '../context/AuthContext';

const SigninScreen = () => {
    const{state,signin,clearErrorMessage}=useContext(Context);

    return (
        <View style={style.container}>
            <NavigationEvents onWillBlur={clearErrorMessage}/>
            <AuthForm
            headerText="Sign in to your account"
            errorMessage={state.errorMessage}
            onSubmit={signin}
            ButtonText="Sign in"/>
            <NavLink text="Dont have an account? Sign up instead."
            routeName="Signup"/>
        </View>


    );
}

SigninScreen.navigationOptions={
    headerShown:false
}


const style = StyleSheet.create({
container:{
    flex:1,
    justifyContent:"center",
    marginBottom:200
}

});

export default SigninScreen;