import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiFog, WiRaindrop, WiNightAltCloudy } from 'react-icons/wi';
import { FaTemperatureFull, FaWind } from "react-icons/fa6";
import { IoMdSunny } from "react-icons/io";

import { IWeatherIconProps } from './WeatherIcon.type';
import { WEATHER_CONDITIONS } from '../../../constants/weatherConstants';

const WeatherIcon = ({ condition, size }: IWeatherIconProps) => {
    switch (condition.toLowerCase()) {
        case WEATHER_CONDITIONS.SUNNY:
        case WEATHER_CONDITIONS.CLEAR:
            return <WiDaySunny size={size || 32} />;
        case WEATHER_CONDITIONS.CLOUDY:
            return <WiCloudy size={size || 32} />;
        case WEATHER_CONDITIONS.RAINY:
        case WEATHER_CONDITIONS.RAIN:
            return <WiRain size={size || 32} />;
        case WEATHER_CONDITIONS.SNOWY:
        case WEATHER_CONDITIONS.SNOW:
            return <WiSnow size={size || 32} />;
        case WEATHER_CONDITIONS.STORM:
            return <WiThunderstorm size={size || 32} />;
        case WEATHER_CONDITIONS.FOG:
            return <WiFog size={size || 32} />;
        case WEATHER_CONDITIONS.TEMPERATURE:
            return <FaTemperatureFull size={size || 32} />;
        case WEATHER_CONDITIONS.WIND:
            return <FaWind size={size || 32} />;
        case WEATHER_CONDITIONS.RAINDROP:
            return <WiRaindrop size={size || 32} />;
        case WEATHER_CONDITIONS.SUN:
            return <IoMdSunny size={size || 32} />;
        case WEATHER_CONDITIONS.NIGHTCLOUD:
            return <WiNightAltCloudy size={size || 32} />;
        default:
            return <WiDaySunny size={size || 32} />;
    }
};

export default WeatherIcon;
