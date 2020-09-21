import '../_mockLocation';
import React, {useContext,useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView,withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm'
import {FontAwesome} from '@expo/vector-icons';

const TrackCreateScreen = ({isFocused}) => {
    const{addLocation,state:{recording}}=useContext(LocationContext);
    const callback=useCallback(location=>{
        addLocation(location,recording);
    },[recording]);
    const [err]=useLocation(isFocused || recording,callback);

    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text h2>Create a track</Text>
            <Map />
            {err ? <Text>Please enable location</Text> : null}
            <TrackForm/>
        </SafeAreaView> 
    );

};

TrackCreateScreen.navigationOptions = {
    title:'Add track',
    tabBarIcon:<FontAwesome name="plus" size={20}/>
};



const style = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);