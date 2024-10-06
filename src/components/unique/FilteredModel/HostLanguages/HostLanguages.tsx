import { Dispatch, SetStateAction } from "react";

const languages = [
    "English",
    "Arabic",
    "Spanish",
    "Mandarin Chinese",
    "Hindi",
];
interface HostLanguagesProps {
    hostLanguages: string[];
    setHostLanguages: Dispatch<SetStateAction<string[]>>
}

const HostLanguages = ({ hostLanguages, setHostLanguages }: HostLanguagesProps) => {
    const handleSetHostLanguage = (value: string) => {
        if (hostLanguages?.includes(value)) {
            const filtered = hostLanguages.filter(item => value !== item)
            setHostLanguages(filtered)
        } else {
            setHostLanguages([...hostLanguages, value])
        }
    }

    return (
        <div className="space-y-5">
            <h3 className="text-lg font-semibold text-gray-800">Host Language</h3>
            <ul className="flex flex-col gap-3">
                {languages?.map((item: string) => (
                    <li
                        onClick={() => handleSetHostLanguage(item)}
                        key={item} className='flex items-center gap-2 '>
                        <input id={item} type='checkbox' className='h-5 w-5 cursor-pointer bg-black' value={item} />
                        <label htmlFor={item} className='text-gray-600 text-lg cursor-pointer'>
                            {item}
                        </label>
                    </li>

                ))}
            </ul>
        </div>
    )
}

export default HostLanguages;