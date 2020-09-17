import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/navLink';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = ({ navigation }) => {

    const { state, signup, clearErrorMessage, tryAutomaticSignin } = useContext(Context);

    useEffect(() => {
        tryAutomaticSignin();
    }, []);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillBlur={clearErrorMessage} />
            <AuthForm
                headerText="Sign up for tracker"
                errorMessage={state.errorMessage}
                ButtonText="Sign up"
                onSubmit={signup}
            />
            <NavLink
                routeName="Signin"
                text="Already have an account? Sign in instead."
            />
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