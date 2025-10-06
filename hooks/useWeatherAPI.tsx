import Constants from 'expo-constants';
import { useEffect, useState } from 'react';

export interface FilteredData {
    temp : number;
    maxTemp : number;
    minTemp : number;
    address : string;
    datetime: string;
    precipprob : number;
    preciptype : string;
    description : string;
    conditions : string;
    feelsLike : number;
    windSpeed : number;
    pressure : number;
    uvIndex : number;
    sunrise : string;
    sunset : string;
    humidity : number;
    days : {
        datetime : string,
        temp : string,
        feelsLike : string,
        conditions : string,
    }[],
    historical : {
        year : string,
        temp : string,
        feelsLike : string,
    }[]
}

type DateStrings = {
    year : Number,
    isoDate : String,
}

interface useWeatherProps {
    lat : number | undefined;
    lon : number | undefined;
}

export const useWeatherAPI = ({ lat, lon }: useWeatherProps) =>{
    const apiKey = Constants.expoConfig?.extra?.WEATHERCROSS_API_KEY;
    const [weatherData, setWeatherData] = useState<FilteredData | null>(null);
    const yearsBack = [ 1, 2, 3, 4]; //The years ago that you want the data be from

    const formatTime = (time : string)=>{
        const [hour, minute] = time.split(':');
        const formatted = `${hour}:${minute}`;
        return formatted;
    }

    useEffect(() => {
        if (!lat || lon == null) {
            setWeatherData(null);
            return;
        }

        const getWeather = async () =>{
            const today = new Date();
            try{
                //This is the URL where we'll get the today data for current location
                const todayURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}/next4days?key=${apiKey}&include=daily&unitGroup=metric&lang=id`;

                //This is the url where we'll get the historical data for the same day than today for during 4 years before
                const HistoricalURL = yearsBack.map((offset)=>{
                    const pastDate = new Date(today);
                    pastDate.setFullYear(today.getFullYear() - offset);
                    const isoDate =  pastDate.toISOString().split('T')[0];
                    return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}/${isoDate}?key=${apiKey}&include=days&unitGroup=metric&lang=id`
                })

                const allURLs = [todayURL, ...HistoricalURL];

                //Do a multiple fetch
                const responses = await Promise.all(allURLs.map((url) => fetch(url)));
                const jsonData = await Promise.all(responses.map((res) => res.json()));
                
                //The jsonData is [todayData, HistoricalData] we store the historicalData alone
                const historical = jsonData.slice(1);

                const Filtered : FilteredData = {
                    temp : jsonData[0].days[0].temp,
                    maxTemp : jsonData[0].days[0].tempmax,
                    minTemp : jsonData[0].days[0].tempmin,
                    address : jsonData[0].address,
                    datetime : jsonData[0].days[0].datetime,
                    precipprob : jsonData[0].days[0].precipprob,
                    preciptype : jsonData[0].days[0].preciptype,
                    description : jsonData[0].days[0].description,
                    conditions : jsonData[0].days[0].conditions.split(',').map((t : string)=> t.trim()),
                    feelsLike : jsonData[0].days[0].feelslike,
                    windSpeed : jsonData[0].days[0].windspeed,
                    pressure : jsonData[0].days[0].pressure,
                    uvIndex : jsonData[0].days[0].uvindex,
                    sunrise : formatTime(jsonData[0].days[0].sunrise),
                    sunset : formatTime(jsonData[0].days[0].sunset),
                    humidity : jsonData[0].days[0].humidity,
                    days: jsonData[0].days.map((day: any) => ({
                        datetime: day.datetime,
                        temp: day.temp,
                        feelsLike: day.feelslike,
                        conditions : day.conditions.split(',').map((t : string)=> t.trim()),
                    })),
                    historical : historical.map((entry, i)=>({
                        year: `${today.getFullYear() - (i + 1)}`,
                        temp: entry.days[0].temp.toString(),
                        feelsLike: entry.days[0].feelslike.toString(),
                    }))
                };

                setWeatherData(Filtered);

            }catch(e){
                console.log(e);            
            }
        }

        getWeather();
    }, [lat, lon]);

    return weatherData;
}

export default useWeatherAPI;