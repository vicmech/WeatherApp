import { LocationContext } from "@/context/LocationContext";
import { useGeolocation } from "@/hooks/useGeolocation";
import useReverseGeocoding from "@/hooks/useReverseGeocoding";
import { FilteredData, useWeatherAPI } from "@/hooks/useWeatherAPI";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";

export default function RootLayout() {
      const GeolocationCoordinates = useGeolocation(); //Get the initial location of the user
      const [coordinates, setCoordinates] = useState<{lat : number, lon : number} | null>(null); //This is for allocate current location's coordinates
      const weatherData : FilteredData | null =  useWeatherAPI({lat : coordinates?.lat, lon : coordinates?.lon});
      const realTimeLocation = useReverseGeocoding(coordinates); //Is a reverse Geolocation
      const [selectedLocation, setSelectedLocation] = useState<string>('Loading...');
  
      useEffect(()=>{       
        //If the Geolocation went good, the coordinates are established
          if(GeolocationCoordinates){
            setCoordinates(GeolocationCoordinates);
          }
      },[GeolocationCoordinates]);

      useEffect(()=>{
        //When a new set of coordinates are established, the real time location name is updated
        setSelectedLocation(realTimeLocation);
      }, [realTimeLocation])
      
    return (
      <LocationContext.Provider value={{coordinates, selectedLocation, weatherData, setCoordinates, setSelectedLocation }}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="SearchOverlay" options={{ headerShown: false, presentation : "modal" }} />
        </Stack>
      </LocationContext.Provider>
  );
}
