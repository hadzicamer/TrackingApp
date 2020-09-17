import React, {useContext} from 'react';
import{View,StyleSheet,Text} from 'react-native';
import{SafeAreaView} from 'react-navigation';
import {Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context} from '../context/AuthContext';

const AccountScreen=()=>{

    const {signout}=useContext(Context);

return( 
<SafeAreaView forceInset={{top:"always"}}> 
<Text>AccountScreen</Text>
<Spacer>
<Button title="Sign out" onPress={signout}/>
</Spacer>
</SafeAreaView>
);
};


const style=StyleSheet.create({});

export default AccountScreen;