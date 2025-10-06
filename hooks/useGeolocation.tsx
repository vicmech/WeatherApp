import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

export const useGeolocation = ()=>{
    const [location, setLocation] = useState<{lat : number, lon : number} | null>(null)
    useEffect(() => {
        async function getCurrentLocation() {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('No permission conceded');
                return;
            }
            const location = await Location.getCurrentPositionAsync({});
            setLocation({
                lat : location.coords.latitude,
                lon : location.coords.longitude,
            });
        }
        getCurrentLocation();
    }, []);
    return location;
}