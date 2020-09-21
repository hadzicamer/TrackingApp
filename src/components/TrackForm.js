import React,{useContext} from 'react';
import {Input,Button} from 'react-native-elements';
import Spacer from './Spacer';
import {Context} from '../context/LocationContext';

const TrackForm=()=>{
const {state:{name,recording,locations},startRec,stopRec,changeName}=useContext(Context);

console.log(locations.length);

return (
<>
<Spacer>
<Input value={name} placeholder="Enter name" onChangeText={changeName}/>
</Spacer>
{recording
? <Button title="Stop" onPress={stopRec}/>
:<Button title="Start recording" onPress={startRec}/>
}
</>
);
};

export default TrackForm;