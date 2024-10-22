import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiFog, WiRaindrop, WiNightAltCloudy } from 'react-icons/wi';
import { FaTemperatureFull, FaWind } from "react-icons/fa6";
import { IoMdSunny } from "react-icons/io";

import { IWeatherIconProps } from './WeatherIcon.type';

const WeatherIcon = ({ condition, size }: IWeatherIconProps) => {
    switch (condition.toLowerCase()) {
        case 'sunny':
        case 'clear':
            return <WiDaySunny size={size || 32} />;
        case 'cloudy':
            return <WiCloudy size={size || 32} />;
        case 'rainy':
        case 'rain':
            return <WiRain size={size || 32} />;
        case 'snowy':
        case 'snow':
            return <WiSnow size={size || 32} />;
        case 'storm':
        case 'thunderstorm':
            return <WiThunderstorm size={size || 32} />;
        case 'foggy':
        case 'fog':
            return <WiFog size={size || 32} />;
        case 'temperature':
            return <FaTemperatureFull size={size || 32} />;
        case 'wind':
            return <FaWind size={size || 32} />;
        case 'raindrop':
            return <WiRaindrop size={size || 32} />;
        case 'sun':
            return <IoMdSunny size={size || 32} />;
        case 'nightCloud':
            return <WiNightAltCloudy size={size || 32} />;
        default:
            return <WiDaySunny size={size || 32} />;
    }
};

export default WeatherIcon;
