import { WeatherIcon } from '@/components/WeatherIcon'
import React from 'react'
import { Text, View } from 'react-native'
import { Styles } from './ForecastCardStyle'

interface Props{
    day : {
        datetime : string,
        temp : string,
        feelsLike : string,
        conditions : string,
    } | undefined
}

export const ForecastCard : React.FC<Props> = ({day})=>{
    const getWeekDay = (fechaStr: string): string => {
        const fecha = new Date(fechaStr + 'T12:00:00'); //I add this line to create a date with the midday time, so I can avoid day jumps caused by the diference time zones 
        const opciones: Intl.DateTimeFormatOptions = { weekday: 'long' };
        return fecha.toLocaleDateString('EN', opciones);
    };

    return(
        <View
            style = {Styles.Container}
        >
            <View style = {Styles.DayTextContainer}>
                <Text style={Styles.DayText}>{getWeekDay(day? day.datetime : '')}</Text>
            </View>
            
            <View style = {Styles.IconContainer}>
                <WeatherIcon type={day?.conditions[0]} size={28} color='#D5D8E2'></WeatherIcon>
            </View>

            <View style = {Styles.TextContainer}>
                <Text style={Styles.TempText}>{day?.temp}°C / {day?.feelsLike}°C</Text>
            </View>
        </View>
    )
}