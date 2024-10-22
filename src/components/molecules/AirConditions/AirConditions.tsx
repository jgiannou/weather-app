import { WeatherIcon } from "../../atoms";
import { IAirConditionsProps } from "./AirConditions.type";

const AirConditions = ({ realFeel, windSpeed, chanceOfRain, uvIndex }: IAirConditionsProps) => {
    return (
        <div className="flex flex-col gap-4">
            <h4 className="font-bold mb-2 text-sm"> AIR CONDITIONS</h4>
            <div className="flex flex-col gap-9 font-semibold text-sm">
                <div className="flex flex-col">
                    <div className="flex flex-row items-center">
                        <WeatherIcon condition="temperature" size={14} />
                        <p className="text-xs">Real Feel</p>
                    </div>
                    <p className="ml-3">{realFeel}°</p>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row items-center">
                        <WeatherIcon condition="wind" size={20} />
                        <p className="text-xs">Wind</p>
                    </div>
                    <p className="ml-3">{windSpeed} km/hr</p>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row items-center">
                        <WeatherIcon condition="raindrop" size={20} />
                        <p className="text-xs">Chance of rain</p>
                    </div>
                    <p className="ml-3">{chanceOfRain}%</p>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row items-center gap-1">
                        <WeatherIcon condition="sun" size={20} />
                        <p className="text-xs">UV Index</p>
                    </div>
                    <p className="ml-3">{uvIndex}</p>
                </div>
            </div>
        </div>
    );
};

export default AirConditions;
