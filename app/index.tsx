import { DetailedSection } from "@/components/DetailedSection/DetailedSection";
import { ForecastProps, ForecastSection } from "@/components/ForecastSection/ForecastSection";
import { HistoricalData, HistoricalSection } from '@/components/HistoricalSection/HistoricalSection';
import { MainInfo } from "@/components/MainInfo/MainInfo";
import { LocationContext } from "@/context/LocationContext";
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from "expo-router";
import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import Carousel from 'react-native-reanimated-carousel';

export default function Index() {
    const { coordinates, selectedLocation, weatherData} = useContext(LocationContext);
    const [CarouselParentWidth, setCarouselParentWidth] = useState(0); //This is just for store de width of the carousel parent in a variable that will be used later (Waiting for improvement)
    const CarouselCombinated = [weatherData?.days, weatherData?.historical] //I need an array of values wich will be used for each corresponding item of the carousel
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
                <TouchableOpacity style = {{
                  justifyContent : 'center',
                  alignContent : 'center',
                  marginTop : 50,
                  height : '10%',
                }}
                  onPress={() => router.push('/SearchOverlay')}>
                    <View
                        style = {{
                            flex : 1,
                            flexDirection : 'row',
                            justifyContent : 'center',
                            alignContent : 'center',
                        }}
                    >   
                        <View
                            style = {{
                                justifyContent : 'center',
                                alignContent : 'center'
                            }}
                        >
                            <Text style={{ 
                                fontSize: 18, 
                                color: '#D5D8E2',  
                                textAlign : 'center',
                                textAlignVertical : 'center',
                            }}>
                                {selectedLocation} 
                            </Text>
                        </View>
                        <View
                            style = {{
                                paddingLeft : 10,
                                justifyContent : 'center',
                                alignContent :'center'
                            }}
                        >
                            <Ionicons name="search" size={25} color="#D5D8E2" />
                        </View>
                    </View>
                </TouchableOpacity>
                <MainInfo coordinates={ coordinates } selectedLocation = {selectedLocation} weatherData={weatherData}></MainInfo>
    
            </View>
    
            <View
                style = {{
                    alignContent : 'center',
                    justifyContent : 'center',
                    height : '30%',
                    width : '100%',
                    padding : 5,
                    boxSizing : 'border-box',
                }}

                onLayout={(e)=>{
                    //When the component is mounted, the width of the parent is taken for reference by the carousel
                    const {width} = e.nativeEvent.layout;
                    setCarouselParentWidth(width);
                }}
            >
                {CarouselParentWidth > 0 && (
                    <Carousel
                    loop = {false}
                    width={CarouselParentWidth}
                    height={200}
                    autoPlay={false}
                    data={CarouselCombinated}
                    scrollAnimationDuration={800}
                    renderItem={({ index }) => {
                        const item = CarouselCombinated[index];
                        return index % 2 === 0? (
                            <ForecastSection days={item as ForecastProps['days']}/>
                        ) : (
                            <HistoricalSection historical={item as HistoricalData['historical']}></HistoricalSection>
                        );
                    }}
                    />
                )}
            </View>
    
            <View
                style = {[{
                justifyContent: "center",
                height : '20%',
                padding : 5,
                }]}
            >
                <DetailedSection weatherData = {weatherData}></DetailedSection>
            </View>
            </LinearGradient>
        </View>
    )
}
