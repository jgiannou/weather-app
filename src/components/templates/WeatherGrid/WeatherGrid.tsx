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
    [WeatherComponentType.HourlyForecast]: (props: IHourlyForecastProps) => <HourlyForecast {...props} />,
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
            className={`grid grid-cols-1 grid-flow-col sm:grid-cols-[100px_50%_30%] 
            xl:grid-cols-[100px_3fr_1fr] gap-4 md:${gap} ${className} h-full w-full mt-6`}
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
                        columnClass = 'col-start-1 row-span-2 hidden md:block';
                        break;
                    case 2:
                        columnClass = 'col-start-2';
                        break;
                    case 3:
                        columnClass = 'col-start-3 row-span-2';
                        break;
                    default:
                        columnClass = 'col-span-full';
                }

                return (
                    <div key={index} className={`min-h-full h-full w-full backdrop-blur-xl bg-glass-bg rounded-gr text-white ${columnClass}`}>
                        <Component {...props} />
                    </div>
                );
            })}
        </div>
    );
}

export default WeatherGrid