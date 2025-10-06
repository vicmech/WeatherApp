import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

//This is a non practical way to list all the possibles types that can exist 
const weatherIconMap = {
  "type_1": "weather-snowy-heavy",            // Blowing Or Drifting Snow
  "type_2": "weather-drizzle",                // Drizzle
  "type_3": "weather-pouring",                // Heavy Drizzle
  "type_4": "weather-drizzle",                // Light Drizzle
  "type_5": "weather-pouring",                // Heavy Drizzle/Rain
  "type_6": "weather-drizzle",                // Light Drizzle/Rain
  "type_7": "weather-hazy",                   // Dust storm
  "type_8": "weather-fog",                    // Fog
  "type_9": "weather-snowy-rainy",            // Freezing Drizzle/Freezing Rain
  "type_10": "weather-snowy-rainy",           // Heavy Freezing Drizzle/Freezing Rain
  "type_11": "weather-snowy-rainy",           // Light Freezing Drizzle/Freezing Rain
  "type_12": "weather-fog",                   // Freezing Fog
  "type_13": "weather-snowy-rainy",           // Heavy Freezing Rain
  "type_14": "weather-snowy-rainy",           // Light Freezing Rain
  "type_15": "weather-tornado",               // Funnel Cloud/Tornado
  "type_16": "weather-hail",                  // Hail Showers
  "type_17": "weather-snowy",                 // Ice
  "type_18": "weather-lightning",             // Lightning Without Thunder
  "type_19": "weather-fog",                   // Mist
  "type_20": "weather-partly-rainy",          // Precipitation In Vicinity
  "type_21": "weather-rainy",                 // Rain
  "type_22": "weather-snowy-rainy",           // Heavy Rain And Snow
  "type_23": "weather-snowy-rainy",           // Light Rain And Snow
  "type_24": "weather-pouring",               // Rain Showers
  "type_25": "weather-pouring",               // Heavy Rain
  "type_26": "weather-rainy",                 // Light Rain
  "type_27": "weather-sunny",                 // Sky Coverage Decreasing
  "type_28": "weather-partly-cloudy",         // Sky Coverage Increasing
  "type_29": "weather-cloudy",                // Sky Unchanged
  "type_30": "weather-hazy",                  // Smoke Or Haze
  "type_31": "weather-snowy",                 // Snow
  "type_32": "weather-snowy-rainy",           // Snow And Rain Showers
  "type_33": "weather-snowy",                 // Snow Showers
  "type_34": "weather-snowy-heavy",           // Heavy Snow
  "type_35": "weather-snowy",                 // Light Snow
  "type_36": "weather-windy",                 // Squalls
  "type_37": "weather-lightning-rainy",       // Thunderstorm
  "type_38": "weather-lightning",             // Thunderstorm Without Precipitation
  "type_39": "weather-snowy",                 // Diamond Dust
  "type_40": "weather-hail",                  // Hail
  "type_41": "weather-cloudy",                // Overcast
  "type_42": "weather-partly-cloudy",         // Partially cloudy
  "type_43": "weather-sunny"                  // Clear
} as const;

type WeatherIconProps = {
  type: string | undefined;
  size?: number;
  color?: string;
};

export const WeatherIcon: React.FC<WeatherIconProps> = ({
  type,
  size = 64,
  color = '#333'
}) => {
  const iconName = weatherIconMap[type as keyof typeof weatherIconMap] ?? "weather-sunny";
  return <MaterialCommunityIcons name={iconName as any} size={size} color={color} />;
};