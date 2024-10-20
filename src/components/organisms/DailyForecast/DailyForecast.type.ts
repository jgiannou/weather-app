export interface IDailyForecastProps {
    dailyForecastData: {
        day: string;
        time: string;
        realFeel: number;
        windSpeed: number;
        chanceOfRain: number;
        uvIndex: number;
        weatherCondition: string;
    }[];
}