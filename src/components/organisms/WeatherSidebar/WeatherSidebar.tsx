import { IoIosPartlySunny } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiSettings2Fill } from "react-icons/ri";
import { MdExplore } from "react-icons/md";
import { SidebarItemType } from "../../../enums/SidebarItemType";
import { ISidebarProps } from "./WeatherSidebar.type";
import { WeatherSidebarItem } from "../../molecules";
import { Avatar } from '@mantine/core';
import avatar from "../../../assets/avatar.png"
import { useMediaQuery } from "@mantine/hooks";

const WeatherSidebar = ({ items }: ISidebarProps) => {
    const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');;  //Reduce icons sizes for under 640px('sm')
    const responsiveSize = isTablet ? 30 : 50;
    const sidebarItemMap = {
        [SidebarItemType.Weather]: {
            icon: <IoIosPartlySunny size={responsiveSize} />,
            label: 'weather',
        },
        [SidebarItemType.Explore]: {
            icon: <MdExplore size={responsiveSize} />,
            label: 'explore',
        },
        [SidebarItemType.Cities]: {
            icon: <FaMapMarkerAlt size={responsiveSize} />,
            label: 'cities',
        },
        [SidebarItemType.Settings]: {
            icon: <RiSettings2Fill size={responsiveSize} />,
            label: 'settings',
        },
    };

    return (
        <div className="h-full flex flex-col items-center justify-between p-4">
            <Avatar className="mb-2" src={avatar} alt="avatar" size={responsiveSize} />
            <div className="flex flex-col items-center space-y-6 text-white space-around">
                {items.map((item) => {
                    const sidebarItem = sidebarItemMap[item];
                    if (!sidebarItem) {
                        console.warn(`No WeatherSidebar item found for: ${item}`);
                        return null;
                    }
                    return (
                        <WeatherSidebarItem key={item} icon={sidebarItem.icon} label={sidebarItem.label} />
                    );
                })}
            </div>
        </div>


    );
}

export default WeatherSidebar