import { WeatherComponentType } from "../../../enums/WeatherComponentType";

export interface IWeatherGridProps {
    components: Array<{ type: WeatherComponentType, props?: any, column?: number }>;
    gap?: string;
    className?: string;
}
