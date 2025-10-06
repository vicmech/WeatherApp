import { DetailedSection } from "@/components/DetailedSection/DetailedSection";
import { ForecastSection } from "@/components/ForecastSection/ForecastSection";
import { MainInfo } from "@/components/MainInfo/MainInfo";
import { SearchLocation } from "@/components/SearchLocation";
import { useGeolocation } from "@/hooks/useGeolocation";
import useWeatherAPI, { FilteredData } from "@/hooks/useWeatherAPI";
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { View } from "react-native";

export const HomeScreen : React.FC = ()=>{
    const GeolocationCoordinates = useGeolocation();
    const [coordinates, setCoordinates] = useState<{lat : number, lon : number} | null>(useGeolocation());
    const [selectedLocation, setSelectedLocation] = useState<string>('');
    const weatherData : FilteredData | null =  useWeatherAPI({lat : coordinates?.lat, lon : coordinates?.lon});

    useEffect(()=>{       
        if(GeolocationCoordinates){
        setCoordinates(GeolocationCoordinates);
        }
    },[GeolocationCoordinates]);

    return (
        <View
            style = {[{
            flex : 1,
            backgroundColor : '#101525',
            }]}
        >
            <LinearGradient
            colors={['#101525', '#344778']} 
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style = {{
                padding : 16,
            }}
            >
            <View
                style={{
                justifyContent: "center",
                height : '50%',
                }}
            >
                <SearchLocation setCoordinates = {setCoordinates} setSelectedLocation = {setSelectedLocation}/>
                <MainInfo coordinates={ coordinates } selectedLocation = {selectedLocation} weatherData={weatherData}></MainInfo>
    
            </View>
    
            <View
                style = {{
                alignContent : 'center',
                justifyContent : 'center',
                height : '35%',
                padding : 5,
                boxSizing : 'border-box',
                }}
            >
                <ForecastSection days={weatherData?.days}/>
            </View>
    
            <View
                style = {[{
                justifyContent: "center",
                height : '15%',
                padding : 5,
                }]}
            >
                <DetailedSection weatherData = {weatherData}></DetailedSection>
            </View>
            </LinearGradient>
        </View>
    )
}