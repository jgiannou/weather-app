import { WeatherIcon } from "../../atoms";
import { IDailyWeatherProps } from "./DailyWeather.type";

const DailyWeather = ({ day, time, weatherCondition }: IDailyWeatherProps) => {
    return (
        <div>
            <div className="flex flex-col items-center w-16">
                <span className="text-lg">{day}</span> {/* Day Name */}
                <WeatherIcon condition={weatherCondition} /> {/* Weather Icon */}
            </div>
            <span className="text-xs w-36">{time}</span> {/* Time */}
        </div>
    );
};

export default DailyWeather;
