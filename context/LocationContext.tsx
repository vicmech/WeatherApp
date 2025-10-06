import { FilteredData } from '@/hooks/useWeatherAPI';
import { createContext, useContext } from 'react';

export const LocationContext = createContext<{
  coordinates: { lat: number, lon: number } | null;
  setCoordinates: (coords: { lat: number, lon: number }) => void;
  selectedLocation: string;
  setSelectedLocation: (loc: string) => void;
  weatherData: FilteredData | null;
}>({
  coordinates: null,
  setCoordinates: () => {},
  selectedLocation: "",
  setSelectedLocation: () => {},
  weatherData: null,
});

export const useLocation = () => useContext(LocationContext);