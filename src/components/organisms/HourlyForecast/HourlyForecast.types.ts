export interface IHourlyForecastProps {
    forecastData: {
        time: string;
        temperature: number;
        windSpeed: string;
        weatherCondition: string;
    }[];
}
