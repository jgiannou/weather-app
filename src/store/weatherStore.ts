import { create } from 'zustand';
import { WeatherStore } from './types';
import { DEFAULT_CITY } from '../constants/weatherConstants';

export const useWeatherStore = create<WeatherStore>((set, get) => ({
    cities: [],
    selectedCity: DEFAULT_CITY,
    initializeData: (data) => set({ cities: data }),
    setSelectedCity: (city) => set({ selectedCity: city }),
    getCityWeather: (city) => get().cities.find((c) => c.city === city),
}));
