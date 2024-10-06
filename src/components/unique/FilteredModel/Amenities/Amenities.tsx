
import { SetStateAction, Dispatch } from 'react';
import { IconType } from 'react-icons';
import { IoWifiOutline } from 'react-icons/io5';
import { LuBath } from "react-icons/lu";
import { LuHistory } from "react-icons/lu";
import { MdOutlineMuseum } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";

const amenitiesOptions = [
    {
        id: 1,
        icon: IoWifiOutline,
        title: "Wi-Fi"
    },
    {
        id: 2,
        icon: LuBath,
        title: "Thermal Bath"
    },
    {
        id: 3,
        icon: LuHistory,
        title: "Historical Tours"
    },
    {
        id: 4,
        icon: MdOutlineMuseum,
        title: "Art Museums"
    },
    {
        id: 5,
        icon: TiWeatherPartlySunny,
        title: "Nature Trails"
    }
];

interface AmenitiesProps {
    amenities: string[];
    setAmenities: Dispatch<SetStateAction<string[]>>
}

const Amenities = ({ amenities, setAmenities }: AmenitiesProps) => {
    const handleSetAmenities = (value: string) => {
        if (amenities.includes(value)) {
            const filtered = amenities.filter(item => value !== item)
            setAmenities(filtered)
        } else {
            setAmenities([...amenities, value])
        }
    }
    return (
        <div className="space-y-5">
            <h3 className="text-lg font-semibold text-gray-800">Amenities</h3>
            <ul className="flex flex-wrap gap-3">
                {amenitiesOptions.map((item: { id: number, icon: IconType, title: string }) => (
                    <li
                        onClick={() => handleSetAmenities(item.title)}
                        className={`
                            flex items-center px-4 py-2.5 border transition duration-300
                             hover:border-gray-800 
                             ${amenities?.includes(item.title) && 'border-gray-800 bg-[#F7F7F7]'}
                             cursor-pointer rounded-full border gap-2
                        `}
                        key={item.id}
                    >
                        <item.icon />
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Amenities;
