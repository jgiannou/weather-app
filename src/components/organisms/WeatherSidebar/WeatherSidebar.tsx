import { IoIosPartlySunny } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiSettings2Fill } from "react-icons/ri";
import { MdExplore } from "react-icons/md";
import { SidebarItemType } from "../../../enums/SidebarItemType";
import { ISidebarProps } from "./WeatherSidebar.type";
import { WeatherSidebarItem } from "../../molecules";
import { Avatar } from '@mantine/core';
import avatar from "../../../assets/avatar.png"

const sidebarItemMap = {
    [SidebarItemType.Weather]: {
        icon: <IoIosPartlySunny size={50} />,
        label: 'weather',
    },
    [SidebarItemType.Explore]: {
        icon: <MdExplore size={50} />,
        label: 'explore',
    },
    [SidebarItemType.Cities]: {
        icon: <FaMapMarkerAlt size={50} />,
        label: 'cities',
    },
    [SidebarItemType.Settings]: {
        icon: <RiSettings2Fill size={50} />,
        label: 'settings',
    },
};

const WeatherSidebar = ({ items }: ISidebarProps) => {
    return (
        <div className="h-full flex flex-col items-center justify-between p-4">
            <Avatar className="mb-2" src={avatar} alt="avatar" size={60} />
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