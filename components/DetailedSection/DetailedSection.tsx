import { DetailedText } from "@/components/DetailedSection/DetailedText";
import { FilteredData } from "@/hooks/useWeatherAPI";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props{
    weatherData : FilteredData | null;
}

export const DetailedSection : React.FC<Props> = ({weatherData})=>{

    return(
        <View
            style = {[{
                flex : 1,
                
            }]}
        >
            <Text
                style = {[{
                    flex : 0,
                    fontSize : 20,
                    fontWeight : 'bold',
                    color : '#D5D8E2',
                    fontFamily : 'System',
                }]}
            >Details</Text>
            <View
                style={[{
                    flex : 1,
                    flexDirection : "row",
                }]}
            >
                <View
                    style={[Styles.ContainerDetailedText, {
                        borderRightWidth : 1,
                        borderRightColor : '#D5D8E2',
                    }]}
                >
                    <DetailedText title="Humidity" value={String(weatherData?.humidity) + ' %'}></DetailedText>
                    <DetailedText title="Wind" value={String(weatherData?.windSpeed) + ' Km/h'}></DetailedText>
                    <DetailedText title="Pressure" value={String(weatherData?.pressure)}></DetailedText>
                </View>
                <View
                    style={[Styles.ContainerDetailedText, {
                        paddingLeft : 20,
                    }]}
                >
                    <DetailedText title="UV index" value={String(weatherData?.uvIndex)}></DetailedText>
                    <DetailedText title="Sunrise" value={weatherData?.sunrise ?? ''}></DetailedText>
                    <DetailedText title="Sunset" value={weatherData?.sunset ?? ''}></DetailedText>
                </View>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    ContainerDetailedText : {
        padding : 5,
        paddingHorizontal : 10,
        flex : 1,
        flexDirection : 'column',
        justifyContent : 'space-between',
    }
})