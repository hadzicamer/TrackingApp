import React, { useState } from 'react';
import {StyleSheet} from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({headerText,errorMessage,onSubmit,ButtonText}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" />
            <Spacer/>
            <Input secureTextEntry={true} label="Password" value={password} onChangeText={setPassword} autoCapitalize="none" />
            {errorMessage?<Text style={styles.errorMessage}>{errorMessage}</Text>:null}
            <Spacer>
                <Button title={ButtonText} onPress={() => onSubmit({ email, password })} />
            </Spacer>
        </>
    )
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red'
    }
});

export default AuthForm;