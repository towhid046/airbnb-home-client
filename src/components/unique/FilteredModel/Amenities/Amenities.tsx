
import { IconType } from 'react-icons';
import { IoWifiOutline } from 'react-icons/io5';
import { LuBath } from "react-icons/lu";
import { LuHistory } from "react-icons/lu";
import { MdOutlineMuseum } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";

const amenities = [
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

const Amenities = () => {

    return (
        <div className="space-y-5">
            <h3 className="text-lg font-semibold text-gray-800">Amenities</h3>
            <ul className="flex flex-wrap gap-3">
                {amenities.map((item: { id: number, icon: IconType, title: string }) => (
                    <li
                        className="flex items-center px-4 py-2.5 transition duration-300 hover:border-gray-800 cursor-pointer rounded-full border gap-2"
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
