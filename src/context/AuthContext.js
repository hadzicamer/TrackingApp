import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../API/tracker'
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'signup':
            return { errorMessage: '', token: action.payload };
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }

};


const signup = dispatch =>
async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signup', payload: response.data.token });
            navigate('TrackList');

        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Mistake, something went wrong!' })
        }
    };

const signin = (dispatch) => {
    return (email, password) => {

    };
};

const signout = (dispatch) => {
    return () => {

    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { token: null, errorMessage: '' }
);