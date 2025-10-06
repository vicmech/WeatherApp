import { FilteredData } from '@/hooks/useWeatherAPI';
import React from 'react';
import { Text, View } from 'react-native';
import { WeatherIcon } from '../WeatherIcon';
import Styles from './MainInfoStyles';

interface Props {
    coordinates : {lat : number, lon: number} | null,
    selectedLocation : string,
    weatherData : FilteredData | null,
}

export const MainInfo : React.FC<Props> = ({weatherData})=>{

    return(
        <View
            style={[{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }]}
        >
            <WeatherIcon type = {weatherData? weatherData.conditions[0] : 'type_43'} color='#D5D8E2' size={100}/>
            <Text style={Styles.TempText} >{weatherData ? `${weatherData.temp}°C` : 'N/A'}</Text>
            <Text style = {Styles.DescriptionText}>{weatherData ? weatherData.description : 'N/A'}</Text>
            <View
                style = {{
                    width : '40%',
                    flexDirection : 'row',
                    justifyContent : 'space-between',
                }}
            >
                <Text style={Styles.InfoText}>H: {weatherData ? weatherData.maxTemp : 'N/A'}°</Text>
                <Text style={Styles.InfoText}>L: {weatherData ? weatherData.minTemp : 'N/A'}°</Text>
            </View>
            <Text style={Styles.InfoText}>Feels like: {weatherData ? weatherData.feelsLike : 'N/A'}°C</Text>    
        </View>
    );
    /*
    */
}