import { LocationContext } from "@/context/LocationContext";
import { usePhotonGeocoding } from "@/hooks/usePhotonGeocoding";
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native";

const SearchOverlay: React.FC = () => {
    const { setCoordinates} = useContext(LocationContext);
    const router = useRouter();
    const [query, setQuery] = useState('');
    const [ShowList, setShowList] = useState(true);
    const match = usePhotonGeocoding(query); //An array where are all the matchs for the current query
 
    return (
        <View style={{ 
            flex : 1,
        }}>
            <LinearGradient
                colors={['#101525', '#344778']} 
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style = {{
                    padding : 16,
                    flex : 1,
                }}
            >
                <TouchableOpacity
                    onPress={()=>{
                        router.back();
                    }}
                    style = {{
                        flexDirection : 'row',
                        paddingTop : 40,
                    }}
                >
                    <Ionicons name="arrow-back-circle-outline" size={32} color="#D5D8E2" />
                    <View
                        style = {{
                            justifyContent : 'center',
                            alignContent : 'center',
                        }}
                    >
                        <Text
                            style = {{
                                fontFamily : 'system',
                                fontSize : 20,
                                color : '#D5D8E2',
                                textAlign : 'center',
                                textAlignVertical : 'center',
                                paddingLeft : 10
                            }}
                        >
                            Back
                        </Text>
                    </View>
                </TouchableOpacity>
                <TextInput
                    placeholder="Buscar lugar"
                    placeholderTextColor= '#9496a0ff'
                    value={query}
                    onChangeText={setQuery}
                    onFocus={()=>setShowList(true)}
                    onBlur={()=>{setTimeout(()=>{setShowList(false)}, 100)}}
                    style={{ 
                        borderWidth: 1, 
                        borderColor : '#D5D8E2',
                        borderRadius : 20,
                        padding: 10, 
                        marginTop : 25,
                        color : '#D5D8E2',
                        fontFamily : 'system',
                        fontSize : 18,
                    }}
                />
                {ShowList && query.length > 0 &&(
                    <FlatList
                        data={match}
                        keyExtractor={(_, index) => index.toString()}
                        keyboardShouldPersistTaps="always"
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={()=>{
                                            setTimeout(()=>{setShowList(false)}, 100);
                                            setCoordinates({
                                                lat : item.geometry.coordinates[1],
                                                lon : item.geometry.coordinates[0]
                                            });
                                            Keyboard.dismiss();
                                            router.back();
                                }}
                            >
                                <Text
                                    style = {{    
                                        color : '#D5D8E2',
                                        fontSize : 16,
                                        padding : 5,
                                    }}
                                >
                                    {item.properties.name}, {item.properties.state ? item.properties.state : ''}, {item.properties.country ? item.properties.country : ''}
                                </Text>
                            </TouchableOpacity>
                        )}

                        style = {[{
                            paddingHorizontal : 15,
                            marginTop : 20,
                            flex : 1,
                        }]}
                    />
                )}
            </LinearGradient>
        </View>
    );
};

export default SearchOverlay;