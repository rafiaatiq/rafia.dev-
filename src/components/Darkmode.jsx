import { useDarkMode } from "../context/Theme";

export default function Darkmode (){
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    return(
        <div>
        <button className={`md:h-14 md:w-14 h-10 w-10 left-8 top-[40rem] bg-black fixed md:left-20 md:top-[35rem] rounded-full flex justify-center items-center ${isDarkMode ? 'bg-white' : 'dark:bg-black'}`} onClick={toggleDarkMode}>
          <i className={`fa-regular ${isDarkMode ? "fa-moon text-black" : "fa-sun text-white"} md:text-2xl text-xl`}></i>
        </button>
        </div>
    )
}