import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiFog } from 'react-icons/wi';
import { IWeatherIconProps } from './WeatherIcon.type';

const WeatherIcon = ({ condition }: IWeatherIconProps) => {
    switch (condition.toLowerCase()) {
        case 'sunny':
        case 'clear':
            return <WiDaySunny size={32} />;
        case 'cloudy':
            return <WiCloudy size={32} />;
        case 'rainy':
        case 'rain':
            return <WiRain size={32} />;
        case 'snowy':
        case 'snow':
            return <WiSnow size={32} />;
        case 'storm':
        case 'thunderstorm':
            return <WiThunderstorm size={32} />;
        case 'foggy':
        case 'fog':
            return <WiFog size={32} />;
        default:
            return <WiDaySunny size={32} />;
    }
};

export default WeatherIcon;
