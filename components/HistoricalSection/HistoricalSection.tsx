import React from 'react'
import { Text, View } from 'react-native'
import { HistoricalCard } from './HistoricalCard'

export type HistoricalData = { 
    historical : {
        year : string,
        temp : string,
        feelsLike : string,
    }[]
}

export const HistoricalSection : React.FC<HistoricalData> = ({historical})=>{
    if (!historical || historical.length < 4) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: '#D5D8E2'}}>Not enough historical data</Text>
            </View>
        );
    }

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
                >Today for 4 years</Text>
            </View>
            <View
                style = {{
                    height : '90%',
                    justifyContent : 'space-between',
                    paddingVertical : 10,
                }}
            >
                <HistoricalCard day={historical[0]}></HistoricalCard>
                <HistoricalCard day={historical[1]}></HistoricalCard>
                <HistoricalCard day={historical[2]}></HistoricalCard>
                <HistoricalCard day={historical[3]}></HistoricalCard>
            </View>
        </View>
    )
}