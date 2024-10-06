import { LuBookKey } from "react-icons/lu";
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";
import { IconType } from "react-icons";
const options = [
    { id: 1, icon: LuBookKey, title: 'Instant Book' },
    { id: 2, icon: IoKeyOutline, title: 'Self check-in' },
    { id: 3, icon: MdOutlinePets, title: 'Allows pets' },
]
const BookingOptions = () => {
    return (
        <div className="space-y-5">
            <h3 className="text-lg font-semibold text-gray-800">Booking Options</h3>
            <ul className="flex flex-wrap gap-3">
                {options.map((item: { id: number, icon: IconType, title: string }) => (
                    <li key={item.id} className="flex items-center px-4 py-2.5 transition duration-300 hover:border-gray-800 cursor-pointer rounded-full border gap-2">
                        <item.icon />
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookingOptions;