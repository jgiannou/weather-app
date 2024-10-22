// store/index.ts
import { create } from 'zustand';

interface CurrentWeather {
    temperature: number;
    weatherCondition: string;
    date: string;
}

interface ForecastData {
    time: string;
    temperature: number;
    windSpeed: string;
}

interface DailyForecastData {
    day: string;
    time: string;
    realFeel: number;
    windSpeed: number;
    chanceOfRain: number;
    uvIndex: number;
    weatherCondition: string;
}

interface CityWeather {
    city: string;
    currentWeather: CurrentWeather; // Updated to match your mock data structure
    activities: { imageUrl: string; distance: string }[];
    hourlyForecast: ForecastData[]; // Updated to match your mock data structure
    dailyForecast: DailyForecastData[]; // Updated to match your mock data structure
}

interface WeatherStore {
    cities: CityWeather[];
    selectedCity: string;
    initializeData: (data: CityWeather[]) => void;
    setSelectedCity: (city: string) => void;
    getCityWeather: (city: string) => CityWeather | undefined;
}

export const useWeatherStore = create<WeatherStore>((set, get) => ({
    cities: [],
    selectedCity: 'London',
    initializeData: (data) => set({ cities: data }),
    setSelectedCity: (city) => set({ selectedCity: city }),
    getCityWeather: (city) => get().cities.find((c) => c.city === city),
}));
