import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../API/tracker'
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
            case 'signin':
                return { errorMessage: '', token: action.payload };
            case 'clear_Message':
                return{...state,errorMessage:''};
                default:
            return state;
    }
};

const tryAutomaticSignin=dispatch=>async()=>{
    const token=await AsyncStorage.getItem('token');
    if(token){
        dispatch({type:'signin',payload:token});
        navigate('TrackList');
    }else{
        navigate('Signup');
    }
};


const clearErrorMessage=dispatch=>()=>{
dispatch({type:'clear_Message'});
}


const signup = dispatch => async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup',{email,password});
            await AsyncStorage.setItem('token',response.data.token);
            dispatch({ type: 'signin', payload:response.data.token });
            navigate('TrackList');

        } catch (err) {
            dispatch({type:'add_error',payload:'Something went wrong with sign up!'});   
        }
    };

const signin = dispatch => async ({email, password}) => {
        try {
            const response=await trackerApi.post('/signin',{email,password});
            await AsyncStorage.setItem('token',response.data.token);
            dispatch({type:'signin',payload:response.data.token});
            navigate('TrackList');

        } catch (err) {
            dispatch({type:'add_error',payload:'Something went wrong with sign in!'});
    }
};

const signout = (dispatch) => {
    return () => {

    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage,tryAutomaticSignin },
    { token: null, errorMessage: '' }
);