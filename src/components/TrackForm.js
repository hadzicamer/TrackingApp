import React,{useContext} from 'react';
import {Input,Button} from 'react-native-elements';
import Spacer from './Spacer';
import {Context} from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm=()=>{
const {state:{name,recording,locations},startRec,stopRec,changeName}=useContext(Context);

// console.log(locations.length);
const [saveTrack]=useSaveTrack();
return (
<>
<Spacer>
<Input value={name} placeholder="Enter name" onChangeText={changeName}/>
</Spacer>
<Spacer>

{recording
? <Button title="Stop" onPress={stopRec}/>
:<Button title="Start recording" onPress={startRec}/>
}
</Spacer>
<Spacer>
{
    !recording && locations.length
    ? <Button title="Save recording" onPress={saveTrack}/>
    :null}
</Spacer>
</>

);
};

export default TrackForm;