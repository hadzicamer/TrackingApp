import * as Location from 'expo-location';

const tenMeteresWithDeg = 0.0001;

const getLocation = increment => {
    return {
        timestamp: 10000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: -122.0312186 + increment * tenMeteresWithDeg,
            latitude: 37.33233141 + increment * tenMeteresWithDeg
        }
    };
};

let ctr = 0;
setInterval(() => {

    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(ctr)
    });
    ctr++;
}, 1000);