import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
function Button() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <div>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Switch Theme</button>
        </div>
    )
}

export default Button
