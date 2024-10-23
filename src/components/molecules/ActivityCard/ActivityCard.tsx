import { ACTIVITIES } from "../../../constants/weatherConstants";
import { IActivityCardProps } from "./ActivityCard.types";


const ActivityCard = ({ imageUrl, distance }: IActivityCardProps) => {
    return (
        <div className="flex flex-col rounded-lg overflow-hidden w-44">
            <img src={imageUrl} alt={distance} className="h-32 w-full object-cover" />
            <p className="text-sm text-black">{distance} {ACTIVITIES.AWAY}</p>
        </div>
    );
};

export default ActivityCard;
