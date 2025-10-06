import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface DetailedTextProps{
    title : string,
    value : string
}

export const DetailedText : React.FC<DetailedTextProps> = ({title , value})=>{
    return(
        <View
            style={[{
                flex : 1,
                flexDirection : 'row',
                justifyContent : 'space-between',
                alignItems : 'center',
            }]}
        >
            <View style = {Styles.TextContainer}>
                <Text
                    style = {[{
                        fontSize : 16,
                        fontWeight : 'bold',
                        color : '#D5D8E2',
                    }]}
                >
                    {title}
                </Text>
            </View>
            
            <View style = {Styles.TextContainer}>
                <Text
                    style={[{
                        fontSize : 16,
                        fontStyle : "italic",
                        textAlign : 'center',
                        color : '#D5D8E2',
                    }]}
                >
                    {value}
                </Text>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    TextContainer : {
        flex : 1,
        width : '50%',
        justifyContent : 'center',
        alignContent : 'center',
    },
})