import { WeatherComponentType } from "../../../enums/WeatherComponentType";
import { ActivitiesList, HourlyForecast, WeatherSidebar } from "../../organisms";
import { IActivitiesListProps } from "../../organisms/ActivitiesList/ActivitiesList.type";
import { DailyForecast } from "../../organisms/DailyForecast";
import { IDailyForecastProps } from "../../organisms/DailyForecast/DailyForecast.type";
import { IHourlyForecastProps } from "../../organisms/HourlyForecast/HourlyForecast.types";
import { ISidebarProps } from "../../organisms/WeatherSidebar/WeatherSidebar.type";
import { IWeatherGridProps } from "./WeatherGrid.types";

const componentMap = {
    [WeatherComponentType.WeatherSidebar]: (props: ISidebarProps) => <WeatherSidebar {...props} />,
    [WeatherComponentType.HourlyForecast]: (props: IHourlyForecastProps) => <HourlyForecast  {...props} />,
    [WeatherComponentType.ActivitiesList]: (props: IActivitiesListProps) => <ActivitiesList {...props} />,
    [WeatherComponentType.DailyForecast]: (props: IDailyForecastProps) => <DailyForecast {...props} />,
};

const WeatherGrid = ({
    components,
    gap = 'gap-7',
    className = '',
}: IWeatherGridProps) => {
    return (
        <div
            className={`grid grid-cols-1 grid-flow-row sm:grid-flow-col  sm:grid-cols-[7%_62%_28%] 
            2xl:grid-cols-[100px_3fr_1fr] gap-2 md:gap-4 md:${gap} ${className} h-full w-full mt-6`}
        >
            {components.map(({ type, props = {}, column }, index) => {
                const Component = componentMap[type];

                if (!Component) {
                    console.warn(`No component found for type: ${type}`);
                    return null;
                }

                let columnClass = '';
                switch (column) {
                    case 1:
                        columnClass = 'col-start-1 sm:row-span-2 hidden sm:block';
                        break;
                    case 2:
                        columnClass = 'sm:col-start-2 col-start-1 order-2 sm:order-1';
                        break;
                    case 3:
                        columnClass = 'col-start-1 sm:col-start-3 sm:row-span-2 order-1 sm:order-3';
                        break;
                    default:
                        columnClass = 'col-span-full';
                }

                return (
                    <div key={index} className={`min-h-full h-full w-full sm:backdrop-blur-xl sm:bg-glass-bg rounded-gr text-white ${columnClass}`}>
                        <Component {...props} />
                    </div>
                );
            })}
        </div>
    );
}

export default WeatherGrid