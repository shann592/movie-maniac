import { useEffect, useRef, useState } from 'react'
import './DarkMode.css'
import Sun from '../../assets/Sun.svg?react'
import Moon from '../../assets/Moon.svg?react'

const DarkMode = ({ wrapper }) => {
  const [theme, settheme] = useState(localStorage.getItem('theme') || 'light')

  const setDarkTheme = () => {
    const wrapperClassName = wrapper.current.className
    wrapper.current.className = wrapperClassName + ' bg-zinc-950 text-white'
    localStorage.setItem('theme', 'dark')
  }

  const setLightTheme = () => {
    let wrapperClassName = wrapper.current.className
    wrapper.current.className = wrapperClassName.replace(
      'bg-zinc-950 text-white',
      'text-black'
    )
    localStorage.setItem('theme', 'light')
  }

  useEffect(() => {
    if (theme === 'light') {
      setLightTheme()
    } else {
      setDarkTheme()
    }
  }, [theme])

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkTheme()
    } else {
      setLightTheme()
      console.log('light')
    }
  }

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={theme === 'dark' ? true : false}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  )
}

export default DarkMode
