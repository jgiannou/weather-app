import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { IHourlyForecastProps } from "./HourlyForecast.types";
import { TbClockHour9Filled } from "react-icons/tb";
import { WiCloud, WiNightAltCloudy, WiRain } from 'react-icons/wi';



const HourlyForecast = () => {
    const forecastData = [
        { time: 'Now', temperature: 26, windSpeed: '11.7 km/h', icon: <WiCloud size={24} /> },
        { time: '22:00', temperature: 26, windSpeed: '9.3 km/h', icon: <WiNightAltCloudy size={24} /> },
        { time: '00:00', temperature: 22, windSpeed: '12 km/h', icon: <WiRain size={24} /> },
        { time: '02:00', temperature: 16, windSpeed: '15 km/h', icon: <WiRain size={24} /> },
        { time: '04:00', temperature: 20, windSpeed: '15 km/h', icon: <WiRain size={24} /> },
        { time: '06:00', temperature: 22, windSpeed: '15 km/h', icon: <WiCloud size={24} /> },
        { time: '08:00', temperature: 16, windSpeed: '15 km/h', icon: <WiCloud size={24} /> },
    ];
    const CustomTick = ({ x, y, payload }) => {
        const data = forecastData[payload.index];
        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={20} textAnchor="middle" fill="white" fontSize={10}>{data.time}</text>
                <foreignObject x={-12} y={-15} width={24} height={24}>
                    {data.icon}
                </foreignObject>
            </g>
        );
    };

    return (
        <div className="py-3 w-full">
            <div className="flex flex-row px-9 items-center gap-1 mb-10">
                <TbClockHour9Filled size={16} />
                <h4 className="text-sm font-semibold">24-hour forecast</h4>
            </div>

            <div className="flex items-center justify-between h-28 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={forecastData} margin={{ top: 0, bottom: 0, left: 0, right: 0 }} >
                        <XAxis dataKey="time" tick={<CustomTick />} axisLine={false} tickLine={false} style={{ color: "white" }} padding={{ left: 30, right: 30 }} />
                        <Tooltip contentStyle={{ background: "none", border: "none" }} />

                        <Line
                            type="monotone"
                            dataKey="temperature"
                            stroke="#f7b600"
                            strokeWidth={2}
                            dot={({ cx, cy, payload, index }) => {
                                const dotRadius = payload.time === 'Now' ? 6 : 3;
                                return <circle key={index} cx={cx} cy={cy} r={dotRadius} fill="#f7b600" />;
                            }}

                        />

                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default HourlyForecast;
