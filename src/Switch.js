import useDarkMode from './hooks/useDarkMode'

const Switch = () => {
    const [darkTheme, setDarkTheme] = useDarkMode()
    const handleMode = () => setDarkTheme(!darkTheme)

    return (
        <label className="text-light-paragraph dark:text-dark-paragraph text-lg font-bold relative items-center group p-2 text-l flex justify-between md:justify-self-auto">
            Dark Mode
            <input onClick={handleMode} defaultChecked={darkTheme} type="checkbox" className="cursor-pointer absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
            <span className="cursor-pointer after:dark:bg-dark-topbg w-14 flex items-center flex-shrink-0 ml-3 p-1 after:translate-x-7 bg-toggle rounded-full duration-300 ease-in-out group-hover:bg-gradient-to-r peer-checked:bg-gradient-to-r from-blue-400 to-green-400 after:w-5 after:h-5 after:bg-light-topbg after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-0" />
        </label>
    )
}

export default Switch