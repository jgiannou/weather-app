import { IAirConditionsProps } from "./AirConditions.type";

const AirConditions = ({ realFeel, windSpeed, chanceOfRain, uvIndex }: IAirConditionsProps) => {
    return (
        <div>
            <h4 className="font-semibold mb-2">Air Conditions</h4>
            <p>Real Feel: <span className="font-bold">{realFeel}°</span></p>
            <p>Wind: <span className="font-bold">{windSpeed} km/hr</span></p>
            <p>Chance of rain: <span className="font-bold">{chanceOfRain}%</span></p>
            <p>UV Index: <span className="font-bold">{uvIndex}</span></p>
        </div>
    );
};

export default AirConditions;
