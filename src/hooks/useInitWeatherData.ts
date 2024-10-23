import { useEffect, useState } from 'react';
import { useWeatherStore } from '../store';
import { WeatherComponentType } from '../enums/WeatherComponentType';
import { SidebarItemType } from '../enums/SidebarItemType';
import { useResponsiveComponents } from './useResponsiveComponents';
import mockData from '../mock/mockData.json';
import { BackgroundImageType } from '../enums/BackgroundImageType';
import BgFallback from '../assets/bg-default.jpg';
import { LOADING_TIMEOUT_MS } from '../constants/uiConstants';
/**
 * Custom hook to initialize and retrieve weather data and associated UI components.
 * Handles the logic for setting up weather data from the store, defining responsive components,
 * and selecting background images based on the current weather conditions.
 */
export const useInitWeatherData = () => {
    const [loading, setLoading] = useState(true);
    const { initializeData, selectedCity, getCityWeather } = useWeatherStore();

    // useEffect to initialize the weather data when the component mounts.
    // It fetches mock weather data and populates the store with city information.
    useEffect(() => {
        setLoading(true); // Start loading
        setTimeout(() => {
            initializeData(mockData.cities); // Initialize the mock data
            setLoading(false); // Finish loading
        }, LOADING_TIMEOUT_MS); // 1 second delay
    }, [initializeData]);

    // Retrieve the current weather data for the selected city from the store.
    const cityWeather = getCityWeather(selectedCity);

    // Sidebar items that are displayed in the weather sidebar
    const sidebarItems = [
        SidebarItemType.Weather,
        SidebarItemType.Explore,
        SidebarItemType.Cities,
        SidebarItemType.Settings,
    ];

    // Dynamically configure the Weather UI components based on the weather data and responsive design for the Weather grid.
    const components = useResponsiveComponents([
        { type: WeatherComponentType.WeatherSidebar, props: { items: sidebarItems }, column: 1 },
        { type: WeatherComponentType.ActivitiesList, props: { activities: cityWeather?.activities }, column: 2 },
        { type: WeatherComponentType.HourlyForecast, props: { forecastData: cityWeather?.hourlyForecast }, column: 2 },
        { type: WeatherComponentType.DailyForecast, props: { dailyForecastData: cityWeather?.dailyForecast }, column: 3 },
    ]);

    // Determine the background image to display based on the current weather condition.
    const selectedBg = cityWeather
        ? BackgroundImageType[cityWeather.currentWeather.weatherCondition as keyof typeof BackgroundImageType]
        : BgFallback;

    return { loading, cityWeather, components, selectedBg };
};
