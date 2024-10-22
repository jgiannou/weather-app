import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { TbClockHour9Filled } from "react-icons/tb";
import { useMediaQuery } from '@mantine/hooks';
import { Button } from '@mantine/core';
import { IHourlyForecastProps } from './HourlyForecast.types';
import { WeatherIcon } from '../../atoms';

const HourlyForecast = ({ forecastData }: IHourlyForecastProps) => {
    const isTabletOrLarger = useMediaQuery('(min-width: 640px)');

    const CustomTick = ({ x, y, payload }: any) => {
        const data = forecastData[payload.index];
        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={isTabletOrLarger ? 10 : 20} textAnchor="middle" fill="white" fontSize={10}>{data.windSpeed}</text>
                <text x={0} y={0} dy={isTabletOrLarger ? 0 : 10} textAnchor="middle" fill="white" fontSize={10}>{data.time}</text>
                <foreignObject x={-12} y={isTabletOrLarger ? -35 : -20} width={24} height={24}>
                    <WeatherIcon condition={data.weatherCondition} size={24} />
                </foreignObject>
            </g>
        );
    };

    return (
        <div className="py-3 w-full sm:border-none border border-white sm:backdrop-blur-xl bg-glass-bg rounded-gr sm:backdrop-blur-none sm:bg-transparent">
            <div className="flex flex-row px-9 items-center gap-1 sm:mb-10 mb-5">
                <TbClockHour9Filled size={16} />
                <h4 className="text-sm font-semibold">24-hour forecast</h4>
            </div>
            <div className="flex flex-col items-center justify-between sm:h-28  h-44 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={forecastData} margin={{ top: 0, bottom: 0, left: 0, right: 0 }}>
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
                {!isTabletOrLarger && (
                    <Button color='rgba(234, 202, 143, 1)' className="mt-5 text-sm" size='md' variant="filled" radius="xl">5-day forecast</Button>
                )}
            </div>
        </div>
    );
};

export default HourlyForecast;
