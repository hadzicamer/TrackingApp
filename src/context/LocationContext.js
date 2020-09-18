import createDataConext from './createDataContext';

const locationReducer=(state,action)=>{
    switch(action.type){
        case 'add_currentLoc':
            return{...state,currentLocation:action.payload}
        default:
            return state;
    }
};

const startRec=dispatch=>()=>{};
const stopRec=dispatch=>()=>{};
const addLocation=dispatch=>(location)=>{
dispatch({type:'add_currentLoc',payload:location});
};


export const{Context,Provider}=createDataConext(
    locationReducer,
    {startRec,stopRec,addLocation},
    {recording:false,locations:[],currentLocation:null}
);

