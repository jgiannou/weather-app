import { ILayoutProps } from "./Layout.types"
import { BackgroundImage } from "../../atoms"
import { LoadingOverlay } from "@mantine/core"

const Layout = ({ children, selectedBg, loading }: ILayoutProps) => {
    return (
        <div className="flex h-full w-full">
            <LoadingOverlay
                visible={loading}
                zIndex={1000}
                overlayProps={{ radius: 'sm', blur: 2 }}
                loaderProps={{ color: 'pink', type: 'bars' }}
            />
            <BackgroundImage src={selectedBg} alt="weather-background" />
            <main className="flex-1 sm:pt-12 h-full w-full px-4 sm:pb-7 2xl:px-10 flex flex-col items-center z-10">
                {children}
            </main>
        </div>
    )
}

export default Layout