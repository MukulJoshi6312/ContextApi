import React from 'react'
import { useTodo } from '../contexts'

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

  return (
    <div className='flex justify-end my-6 gap-2'>
      <input type="checkbox"
      value=""
      checked={themeMode === "dark"}
      onChange={handleThemeChange}
       />{ themeMode}
    </div>
  )
}

export default ToggleButton
