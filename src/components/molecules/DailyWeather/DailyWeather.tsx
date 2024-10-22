import { TbClockHour9Filled } from "react-icons/tb";
import { WeatherIcon } from "../../atoms";
import { IDailyWeatherProps } from "./DailyWeather.type";

const DailyWeather = ({ day, time, weatherCondition, className }: IDailyWeatherProps) => {
    return (
        <div className={className}>
            <div className="flex flex-col items-center cursor-pointer">
                <span className="text-lg">{day}</span> {/* Day Name */}
                <WeatherIcon condition={weatherCondition} /> {/* Weather Icon */}
            </div>
            {time &&
                <div className="flex flex-row justify-center">
                    <TbClockHour9Filled size={14} />
                    <span className="text-xs w-20">
                        {time}</span>
                </div>
            }
        </div >
    );
};

export default DailyWeather;
