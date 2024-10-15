import { useState, useEffect } from 'react';
import Card from './comps/Card'
import ThemeBtn from './comps/ThemeBtn'
import { ThemeProvider } from './context/Theme';

function App() {
  const [themeMode, setThemeMode] = useState("light");

  // const lightTheme = () => {
  //   setThemeMode("light");
  // }

  // const darkTheme = () => {
  //   setThemeMode("dark");
  // }

  const changeTheme = () => {
    // setThemeMode((prev) => {
    //   if(prev == "light"){
    //     return "dark";
    //   }else{
    //    return "light"
    //   }
    // })
    setThemeMode((prev) => prev === "light" ? "dark" : "light");
  }

  useEffect(() => {
    let html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value = {{themeMode, changeTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"> 
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
