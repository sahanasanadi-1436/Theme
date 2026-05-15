import { useContext } from "react";
import { ThemeContext } from "./App";
function Home(){
    const {theme,setTheme}=useContext(ThemeContext);
    return(
        <div style={{background:theme ==="light" ? "white" : "black",
            color: theme === "light"?"black":"white",
            padding:"20px"
        }}>
            <h1 style={{color:"red"}}>{theme} Theme </h1>
            <button onClick={()=>setTheme("dark")}>Dark</button>
            <button onClick={()=>setTheme("light")}>Light</button>
        </div>
    )
}
export default Home; 