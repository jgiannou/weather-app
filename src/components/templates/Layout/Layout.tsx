import { ILayoutProps } from "./Layout.types"
import rainBg from "../../../assets/rain-bg.png"
import { BackgroundImage } from "../../atoms"

const Layout = ({ children }: ILayoutProps) => {
    return (
        <div
            className="flex h-screen w-screen"
        >
            <BackgroundImage src={rainBg} alt="weather-background" />
            <main className="flex-1 pt-12 pb-7 px-10 flex flex-col items-center z-10">
                {children}
            </main>
        </div>
    )
}

export default Layout