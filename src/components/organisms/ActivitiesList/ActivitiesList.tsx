import { ACTIVITIES } from "../../../constants/weatherConstants";
import { ActivityCard } from "../../molecules";
import { IActivitiesListProps } from "./ActivitiesList.type";
import { FaHeart } from "react-icons/fa";

const ActivitiesList = ({ activities }: IActivitiesListProps) => {
    return (
        <div className="sm:flex flex-col py-2 px-8 gap-9 hidden ">
            <div className="flex flex-row items-center gap-2">
                <FaHeart size={18} />
                <h2 className="text-2xl font-semibold">{ACTIVITIES.ACTIVITIES_IN_YOUR_AREA}</h2>
            </div>
            <div className="flex flex-row overflow-x-auto gap-5 justify-evenly" >
                {activities.map((activity, index) => (
                    <ActivityCard
                        key={index}
                        imageUrl={activity.imageUrl}
                        distance={activity.distance}
                    />
                ))}
            </div>

        </div>
    );
};

export default ActivitiesList;
