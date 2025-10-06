import { useEffect, useState } from 'react';
interface MatchInfo{
    properties: {
    name: string;
    state: string;
    country?: string;
  };
  geometry: {
    coordinates: [number, number];
  };
}

export const usePhotonGeocoding = (query : string)=>{
    const [match, setMatch] = useState<MatchInfo[] | null>(null); //An array of all the matches wich is updated by each typing 
    
    useEffect(()=>{
        const controller = new AbortController();
        const getMatchWithDebounce = setTimeout(()=>{
            if(query.length > 3){
                fetch(`https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=15`, {
                    signal : controller.signal
                })
                .then((res)=>res.json())
                .then((data)=>{
                    setMatch(data.features);
                })
                .catch((err)=>{
                    console.log(err);
                })

            }else{
                setMatch([]);
            }
        }, 400);
        return () => {
            clearTimeout(getMatchWithDebounce);
            controller.abort();
        };
    },[query]);

    return match;
}