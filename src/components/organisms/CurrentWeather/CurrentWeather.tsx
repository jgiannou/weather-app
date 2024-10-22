import { ICurrentWeatherProps } from "./CurrentWeather.types"
import { IoIosPartlySunny } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import { useMediaQuery } from "@mantine/hooks";
import { Select } from '@mantine/core';
import { useWeatherStore } from "../../../store";
import { useState } from "react";

const CurrentWeather = ({
    temperature,
    weatherCondition,
    date
}: ICurrentWeatherProps) => {
    const isTabletOrLarger = useMediaQuery('(min-width: 640px)');
    const [opened, setOpened] = useState(false);
    const { cities, selectedCity, setSelectedCity } = useWeatherStore();

    const cityOptions = cities.map(city => ({
        value: city.city,
        label: city.city
    }));

    return (
        <div className="w-full flex flex-col sm:flex-row justify-between px-1  py-4 sm:py-1  sm:px-14 text-white">
            <div className="flex flex-col justify-between">
                <div className="flex flex-col sm:gap-10 gap-5">
                    <div className="flex flex-row items-center gap-1">
                        <FaMapMarkerAlt size={18} />
                        <Select
                            value={selectedCity}
                            onChange={setSelectedCity}
                            data={cityOptions}
                            classNames={{
                                input: "text-xl sm:text-2xl font-semibold bg-transparent border-none text-white p-0 m-0 mr-2",
                                dropdown: "bg-transparent text-white border-none sm:bg-glass-bg",
                                option: "text-white hover:font-semibold hover:bg-transparent",
                            }}
                            styles={{
                                input: {
                                    width: 'fit-content',
                                    maxWidth: '120px',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                },
                                dropdown: {
                                    width: 'max-content'
                                },
                            }}
                            placeholder="Select City"
                            onDropdownOpen={() => setOpened(true)}
                            onDropdownClose={() => setOpened(false)}
                            comboboxProps={{
                                position: isTabletOrLarger ? 'right' : "bottom",
                                middlewares: { flip: false, shift: false },
                                offset: 0,
                                transitionProps: { transition: 'pop', duration: 200 }
                            }}
                            rightSection={opened ? <FaChevronDown className="text-white" /> : <FaChevronRight className="text-white" />} />
                    </div>
                    <h2 className="weather-condition text-2xl sm:text-5xl font-semibold text-center">{weatherCondition}</h2>
                </div>
                <div>
                    <IoIosPartlySunny className="flex-col d-block sm:hidden weather-icon mx-auto" size={isTabletOrLarger ? 321 : 200} />
                    <h2 className="temperature text-6xl font-semibold text-center sm:text-left">{temperature}°</h2>
                    <p className="date sm:text-sm text-lg mt-2 text-center sm:text-left">{date}</p>
                </div>
            </div>
            <div className="flex hidden sm:block flex-col">
                <IoIosPartlySunny className="flex-col weather-icon mx-auto" size={321} />
            </div>
        </div >
    )
}

export default CurrentWeather;
