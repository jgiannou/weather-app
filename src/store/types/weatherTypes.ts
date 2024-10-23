
export interface CurrentWeather {
    temperature: number;
    weatherCondition: string;
    date: string;
}

export interface ForecastData {
    time: string;
    temperature: number;
    windSpeed: string;
}

export interface DailyForecastData {
    day: string;
    time: string;
    realFeel: number;
    windSpeed: number;
    chanceOfRain: number;
    uvIndex: number;
    weatherCondition: string;
}

export interface CityWeather {
    city: string;
    currentWeather: CurrentWeather;
    activities: { imageUrl: string; distance: string }[];
    hourlyForecast: ForecastData[];
    dailyForecast: DailyForecastData[];
}

export interface WeatherStore {
    cities: CityWeather[];
    selectedCity: string;
    initializeData: (data: CityWeather[]) => void;
    setSelectedCity: (city: string) => void;
    getCityWeather: (city: string) => CityWeather | undefined;
}