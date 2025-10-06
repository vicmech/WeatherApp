import { useEffect, useState } from 'react';
const useAPI = () =>{
    const [weatherData, setWeatherData] = useState();

    useEffect(() => {
      const getWeather = async () =>{
        try{
            const res = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK/2025-09-16?key=3A4AG5VM2NL8S52YT49XWJEVL&include=daily');
            const data = await res.json();
            setWeatherData(data);
            console.log(weatherData);
        }catch(e){
            console.log(e);            
        }
      }
      getWeather();
    }, []);

    return weatherData;
}

export default useAPI;