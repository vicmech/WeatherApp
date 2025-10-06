import { useEffect, useState } from "react";

interface coords{
    lat : number,
    lon : number
}

const useReverseGeocoding = (coords : coords | null)=>{
    const [locationName, setLocationName] = useState<string>('Loading...');
    useEffect(()=>{
        if(coords){
            try{
                fetch(`https://photon.komoot.io/reverse?lon=${coords.lon}&lat=${coords.lat}`)
                .then(res => res.json())
                .then(data => {
                    //Get the location by parts just top filter those that are void or undefined
                    const LocationParts = [
                        data.features[0].properties.name,
                        data.features[0].properties.state,
                        data.features[0].properties.country
                    ].filter(Boolean);

                    const location = LocationParts.join(', ');
                    setLocationName(location);
                }, );
            }catch(e){
                console.log(e)
            }
                
        }
    }, [coords])

    return locationName;
}

export default useReverseGeocoding;