import createDataConext from './createDataContext';

const locationReducer=(state,action)=>{
    switch(action.type){
        case 'add_currentLoc':
            return{...state,currentLocation:action.payload};
            case 'start_rec':
                return{...state,recording:true};
                case 'stop_rec':
                return{...state,recording:false};
                case 'add_loc':
                return{...state,locations:[...state.locations,action.payload]};
                case 'change_name':
                return{...state,name:action.payload};        
                default:
            return state;
    }  
};

const startRec=dispatch=>()=>{
dispatch({type:'start_rec'});
};
const stopRec=dispatch=>()=>{
    dispatch({type:'stop_rec'});

};

const changeName=dispatch=>(name)=>{
dispatch({type:'change_name',payload:name});
}

const addLocation=dispatch=>(location,recording)=>{
dispatch({type:'add_currentLoc',payload:location});
if(recording){
dispatch({type:'add_loc',payload:location});
}

};


export const{Context,Provider}=createDataConext(
    locationReducer,
    {startRec,stopRec,addLocation,changeName },
    {name:'',recording:false,locations:[],currentLocation:null}
);

