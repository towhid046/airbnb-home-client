const languages = [
    "English",
    "Arabic",
    "Spanish",
    "Mandarin Chinese",
    "Hindi",
];


const HostLanguages = () => {
    return (
        <div className="space-y-5">
            <h3 className="text-lg font-semibold text-gray-800">Host Language</h3>
            <ul className="flex flex-col gap-3">
                {languages?.map((item: string) => (
                    <li key={item} className='flex items-center gap-2 '>
                        <input id={item} type='checkbox' className='h-5 w-5 cursor-pointer' value={item} />
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