import { IWeatherSidebarItemProps } from "./WeatherSidebarItem.type";

const WeatherSidebarItem = ({ icon, label, onClick }: IWeatherSidebarItemProps) => {
    return (
        <div className="flex flex-col items-center cursor-pointer" onClick={onClick}>
            <div className="flex flex-col items-center cursor-pointer">
                {icon}
                <span className="text-sm mt-2 font-semibold">{label}</span>
            </div>
        </div>
    );
}

export default WeatherSidebarItem