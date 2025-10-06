import React from 'react'
import { Text, View } from 'react-native'
import { ForecastCard } from './ForecastCard'

export type ForecastProps = {
    days : {
        datetime : string,
        temp : string,
        feelsLike : string,
        conditions : string,
    }[] | undefined
}

export const ForecastSection : React.FC<ForecastProps> = ({days})=>{
    return(
        <View
            style = {{
                flexDirection : 'column',
                justifyContent : 'center',
                alignItems : 'stretch',
                boxSizing : 'border-box',
                flex : 1,
                paddingHorizontal : 20,
            }}
        >
            <View
                style = {{
                    height : '10%',
                }}>
                <Text
                    style = {{
                        color : '#D5D8E2',
                        fontFamily : 'System',
                        fontWeight : 'bold',
                        fontSize : 16,
                    }}
                >4-Days Forecast</Text>
            </View>
            <View
                style = {{
                    height : '90%',
                    justifyContent : 'space-between',
                    paddingVertical : 10,
                }}
            >
                <ForecastCard day={days?.[1]}></ForecastCard>
                <ForecastCard day={days?.[2]}></ForecastCard>
                <ForecastCard day={days?.[3]}></ForecastCard>
                <ForecastCard day={days?.[4]}></ForecastCard>
            </View>
        </View>
    )
}