export interface WeatherCity {
    city: string;
    currentWeather: {
        temperature: number;
        weatherCondition: string;
        date: string;
    };
    activities: Array<{
        imageUrl: string;
        distance: string;
    }>;
    hourlyForecast: Array<{
        time: string;
        temperature: number;
        windSpeed: string;
    }>;
    dailyForecast: Array<{
        day: string;
        time: string;
        realFeel: number;
        windSpeed: number;
        chanceOfRain: number;
        uvIndex: number;
        weatherCondition: string;
    }>;
}

export interface WeatherState {
    cities: WeatherCity[];
    selectedCity: string;
    initializeData: (data: WeatherCity[]) => void;
    setSelectedCity: (city: string) => void;
    getCityWeather: (city: string) => WeatherCity | undefined;
}
