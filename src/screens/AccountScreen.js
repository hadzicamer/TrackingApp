import React, {useContext} from 'react';
import{View,StyleSheet,Text} from 'react-native';
import{SafeAreaView} from 'react-navigation';
import {Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context} from '../context/AuthContext';
import {FontAwesome} from '@expo/vector-icons';

const AccountScreen=()=>{

    const {signout}=useContext(Context);

return( 
<SafeAreaView forceInset={{top:"always"}}> 
<Spacer>
<Button title="Sign out" onPress={signout}/>
</Spacer>
</SafeAreaView>
);
};

AccountScreen.navigationOptions = {
    title:'Account',
    tabBarIcon:<FontAwesome name="gear" size={20}/>
};



const style=StyleSheet.create({});

export default AccountScreen;