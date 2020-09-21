import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance=axios.create({
    baseURL: 'http://ab8687431773.ngrok.io'
});

instance.interceptors.request.use(
    async(config) => { 
        const token=await AsyncStorage.getItem('token');
        if(token){
            config.headers.Authorization= `Bearer ${token}`;
        }
        return config;

    },
    err => { 
        return Promise.reject(err);
    }

);

export default instance;



{/*
axios- to make our requests to API
URL - ngrok(open up direct connection from express API and give public API to get acess)
you must create new instance every 8 hours to get to your localhost machine
*/
}
