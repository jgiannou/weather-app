export interface IHourlyForecastProps {
    forecastData: {
        time: string;
        temperature: number;
        windSpeed: string;
        icon: JSX.Element; // Icon for weather condition
    }[];
}