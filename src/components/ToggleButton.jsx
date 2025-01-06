import React from 'react'
import { useTodo } from '../contexts'
import { IoMdSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";



const ToggleButton = () => {

    const {themeMode,darkMode,lightMode} = useTodo();

    const handleThemeChange = (e) =>{
        const darkModeStatus = e.currentTarget.checked
        if(darkModeStatus){
            darkMode();
        } else{
            lightMode();
        }
    }

    console.log("switch", themeMode)

  return (
    // <div className='flex justify-end my-6 gap-2 items-center'>
    //   <input type="checkbox"
    //   value=""
    //   checked={themeMode === "dark"}
    //   onChange={handleThemeChange}
    //   /><div className='text-2xl transition-all duration-300 ease-in-out'>{ themeMode === "dark" ?<IoMoon/>:<IoMdSunny/> }</div>
    // </div>

    <div className="flex justify-end items-center my-6">
      {/* Switch Container */}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={themeMode === "dark"}
          onChange={handleThemeChange}
        />
        <div
          className={`w-14 h-8 rounded-full transition-colors bg-white ${
            themeMode === "dark" ? "bg-gray-600" : "bg-yellow-400"
          }`}
        ></div>
        <span
          className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
            themeMode === "dark" ? "transform translate-x-6 bg-gray-800" : ""
          }`}
        ></span>
      </label>

      {/* Icon */}
      <div className="ml-3 text-2xl transition-all duration-300 ease-in-out">
        {themeMode === "dark" ? <IoMoon /> : <IoMdSunny />}
      </div>
    </div>
  )
}

export default ToggleButton
