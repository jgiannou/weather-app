import { LayoutProps } from "./Layout.types"

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <aside>
                WeatherSidebar Component
            </aside>
            <main></main>
        </div>
    )
}

export default Layout