import { IoMdSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

function ThemeSwitch({ themeMode, handleThemeChange }) {
  return (
    <div className="flex justify-end items-center my-6">
      {/* Switch Container */}
      <div
        className={`relative w-14 h-8 flex items-center rounded-full cursor-pointer transition-colors ${
          themeMode === "dark" ? "bg-gray-700" : "bg-yellow-400"
        }`}
        onClick={handleThemeChange}
      >
        {/* Toggle Knob */}
        <span
          className={`absolute w-7 h-7 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            themeMode === "dark" ? "translate-x-6" : "translate-x-0"
          }`}
        ></span>
      </div>

      {/* Icon */}
      <div className="ml-3 text-2xl transition-colors duration-300">
        {themeMode === "dark" ? <IoMoon /> : <IoMdSunny />}
      </div>
    </div>
  );
}

export default ThemeSwitch;
