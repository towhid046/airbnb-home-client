import { FaHotel } from 'react-icons/fa';
import { GiIsland } from 'react-icons/gi';
import { FaHome } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { IconType } from 'react-icons';
import { Dispatch, SetStateAction } from 'react';

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

interface PropertyTypesProps {
    propertyType: string;
    setPropertyType: Dispatch<SetStateAction<string>>
}

const PropertyTypes = ({ propertyType, setPropertyType }: PropertyTypesProps) => {
    const handleSetPropertyTypes = (value: string) => {
        if (propertyType === value) {
            setPropertyType('')
        } else {
            setPropertyType(value)
        }
    }
    return (
        <div className="space-y-5">
            <h3 className="text-lg font-semibold text-gray-800">Property Type</h3>
            <ul className="flex flex-wrap gap-3">
                {types.map((item: { id: number, icon: IconType, title: string }) => (
                    <li
                        onClick={() => handleSetPropertyTypes(item.title)}
                        className={`
                            flex items-center px-4 py-2.5 border transition duration-300
                             hover:border-gray-800 
                             ${propertyType === item.title && 'border-gray-800 bg-[#F7F7F7]'}
                             cursor-pointer rounded-full border gap-2
                        `}

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