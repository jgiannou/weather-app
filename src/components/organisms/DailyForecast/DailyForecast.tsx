import { IDailyForecastProps } from './DailyForecast.type';
import { AirConditions, DailyWeather } from '../../molecules';
import { Carousel } from '@mantine/carousel';



const DailyForecast = ({ dailyForecastData }: IDailyForecastProps) => {

    return (
        <div className="p-4">
            <Carousel
                withIndicators={false} // Hide indicators for a clean look
                height={200}
                slideSize="20%"
                align={"center"} // Center the slides
                loop
                slidesToScroll={1}
            >
                {dailyForecastData?.map((dayItem, index) => (
                    <Carousel.Slide key={index}>
                        <DailyWeather
                            day={dayItem.day}
                            time={dayItem.time}
                            weatherCondition={dayItem.weatherCondition}
                        />
                    </Carousel.Slide>
                ))}
            </Carousel>

            {/* Air Conditions for the first day (or selected day in the future) */}
            <AirConditions
                realFeel={dailyForecastData[0].realFeel}
                windSpeed={dailyForecastData[0].windSpeed}
                chanceOfRain={dailyForecastData[0].chanceOfRain}
                uvIndex={dailyForecastData[0].uvIndex}
            />
        </div >
    );
};

export default DailyForecast;
