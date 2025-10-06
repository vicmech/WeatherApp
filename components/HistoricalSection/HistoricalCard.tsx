import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
    day : {
        year : String,
        temp : String,
        feelsLike : String,
    }
}

export const HistoricalCard : React.FC<Props> = ({day})=>{

    return(
        <View
            style = {Styles.Container}
        >
            <View style = {Styles.DayTextContainer}>
                <Text style={Styles.DayText}>{day.year}</Text>
            </View>

            <View style = {Styles.TextContainer}>
                <Text style={Styles.TempText}>{day.temp}°C / {day.feelsLike}°C</Text>
            </View>
        </View>
    )
}


const Styles = StyleSheet.create({
    DayText : {
        fontSize : 16, 
        textAlign : 'center',
        color : '#D5D8E2',
        fontFamily : 'system',
    },

    TempText : {
        fontSize : 14,
        color : '#D5D8E2',
    },

    Container : {   
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignContent : 'center',
        width : '100%',
        boxSizing : 'border-box',
        backgroundColor : '#46516E',
        borderRadius : 30,
        height : '22%',
        paddingHorizontal : 20,
        paddingVertical : 3,
    },
     
    TextContainer : {
        justifyContent : 'center',
        alignContent : 'center',
    },  

    DayTextContainer : {
        justifyContent : 'center',
        alignContent : 'center',
    },

    IconContainer : {
        height : '100%',
        justifyContent : 'center',
        alignContent : 'center',
    }
})