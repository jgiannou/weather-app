import { IDailyForecastProps } from './DailyForecast.type';
import { AirConditions, DailyWeather } from '../../molecules';
import { Carousel } from '@mantine/carousel';
import { useCurrentDay } from '../../../hooks/useCurrentDay';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';



const DailyForecast = ({ dailyForecastData }: IDailyForecastProps) => {
    const isTabletOrLarger = useMediaQuery('(min-width: 640px)');

    const currentDay = useCurrentDay(); // Get the current day in 'SUN', 'MON' format

    // Set up state to keep track of the currently active slide
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        // Find index of the current day from dailyForecastData
        const currentDayIndex = dailyForecastData.findIndex(
            (dayItem) => dayItem.day === currentDay
        );
        if (currentDayIndex !== -1) {
            setActiveSlide(currentDayIndex); // Set the active slide to the current day
        }
    }, [currentDay, dailyForecastData]); // Re-run when currentDay or dailyForecastData changes

    return (
        <div className="p-4">
            <Carousel
                withIndicators={false}
                height={100}
                slideSize="20%"
                slideGap={0}
                align={"center"}
                initialSlide={activeSlide}
                onSlideChange={setActiveSlide}
                loop
                draggable={false}
                slidesToScroll={1}
                classNames={{
                    controls: 'top-5 m-0 p-0', // Custom class to move the controls in line with the slides
                }}
                styles={{
                    control: {
                        backgroundColor: 'transparent',
                        color: 'rgba(245, 183, 71, 1)',
                        fontSize: '3rem',
                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: 'rgba(245, 183, 71, 0.8)',
                        },
                        border: 'none',
                        boxShadow: 'none',
                    },
                }}
            >
                {dailyForecastData?.map((dayItem, index) => (
                    <Carousel.Slide key={index} onClick={() => setActiveSlide(index)} >
                        <DailyWeather
                            day={dayItem.day}
                            time={index === activeSlide && dayItem.time}
                            weatherCondition={dayItem.weatherCondition}
                            className={`text-center ${index === activeSlide
                                ? 'scale-110 opacity-100'
                                : 'opacity-50 mt-1'
                                }`}
                        />
                    </Carousel.Slide>
                ))}
            </Carousel>
            {isTabletOrLarger && <AirConditions
                realFeel={dailyForecastData[activeSlide].realFeel}
                windSpeed={dailyForecastData[activeSlide].windSpeed}
                chanceOfRain={dailyForecastData[activeSlide].chanceOfRain}
                uvIndex={dailyForecastData[activeSlide].uvIndex}
            />
            }
        </div >
    );
};

export default DailyForecast;
