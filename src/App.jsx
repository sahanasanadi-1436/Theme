import Home from './Home'
import { createContext, useState } from 'react'
import './App.css'
export const ThemeContext=createContext();
function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
    <ThemeContext.Provider value={{theme,setTheme}}>
      <Home/>
    </ThemeContext.Provider>
    </>
  );
}

export default App
