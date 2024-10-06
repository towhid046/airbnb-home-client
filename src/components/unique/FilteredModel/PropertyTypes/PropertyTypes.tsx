import { FaHotel } from 'react-icons/fa';    
import { GiIsland } from 'react-icons/gi';     
import { FaHome } from 'react-icons/fa';        
import { FaBuilding } from 'react-icons/fa';    
import { IoIosPeople } from 'react-icons/io';   
import { IconType } from 'react-icons';

const types = [
    {
        id: 1,
        icon: FaHotel,
        title: "Hotel"
    },
    {
        id: 2,
        icon: GiIsland,
        title: "Resort"
    },
    {
        id: 3,
        icon: FaHome,
        title: "Guesthouse"
    },
    {
        id: 4,
        icon: FaBuilding,
        title: "Apartment"
    },
    {
        id: 5,
        icon: IoIosPeople,
        title: "Hostel"
    }
];


const PropertyTypes = () => {
    return (
        <div className="space-y-5">
            <h3 className="text-lg font-semibold text-gray-800">Property Type</h3>
            <ul className="flex flex-wrap gap-3">
                {types.map((item: { id: number, icon: IconType, title: string }) => (
                    <li className="flex items-center px-4 py-2.5 transition duration-300 hover:border-gray-800 cursor-pointer rounded-full border gap-2"
                        key={item.id}>
                        <item.icon />
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default PropertyTypes