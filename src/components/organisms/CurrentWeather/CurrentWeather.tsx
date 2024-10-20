import { ICurrentWeatherProps } from "./CurrentWeather.types"
import { IoIosPartlySunny } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

const CurrentWeather = ({
    city,
    temperature,
    weatherCondition,
    date }: ICurrentWeatherProps) => {
    return (
        <div className="w-full flex flex-row justify-between px-14 text-white">
            <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-row items-center gap-1">
                        <FaMapMarkerAlt size={18} />
                        <h3 className="text-2xl font-semibold">
                            {city}
                        </h3>
                        <FaChevronRight size={20} />
                    </div>
                    <h2 className="weather-condition text-5xl font-semibold">{weatherCondition}</h2>
                </div>
                <div>
                    <h2 className="temperature text-6xl font-semibold">{temperature}°</h2>
                    <p className="date text-sm mt-2">{date}</p>
                </div>
            </div>
            <div className="flex flex-col">
                <IoIosPartlySunny className="flex-col weather-icon mx-auto" size={321} />
            </div>
        </div >
    )
}

export default CurrentWeather