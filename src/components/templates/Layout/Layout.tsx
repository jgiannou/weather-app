import { ILayoutProps } from "./Layout.types"
import { BackgroundImage } from "../../atoms"
import { useWeatherStore } from "../../../store";
import { BackgroundImageType } from "../../../enums/BackgroundImageType";

const Layout = ({ children }: ILayoutProps) => {
    const { selectedCity, getCityWeather } = useWeatherStore(); //this is wrong here , i should detach any data logic from the layout ui presentationå
    const cityWeather = getCityWeather(selectedCity);
    const selectedBg = BackgroundImageType[cityWeather?.currentWeather.weatherCondition as keyof typeof BackgroundImageType];
    return (
        <div
            className="flex h-full w-full"
        >
            <BackgroundImage src={selectedBg} alt="weather-background" />
            <main className="flex-1 sm:pt-12 h-full w-full px-4 sm:pb-7 2xl:px-10 flex flex-col items-center z-10">
                {children}
            </main>
        </div>
    )
}

export default Layout