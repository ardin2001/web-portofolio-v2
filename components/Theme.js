"use client";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";

export default function ToggleTheme () {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
        if(theme == "light") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };
    console.log("theme", theme);
    return (
        <div onClick={toggleTheme} className="text-sm flex items-center gap-1 sm:gap-1.5 bg-white py-1 sm:py-1.5 px-3 sm:px-3.5 lg:px-4 cursor-pointer shadow-gray-700 outline-orange-500 text-slate-700  dark:outline-white dark:text-white theme shadow-md rounded-full outline-1 outline-none hover:bg-orange-500 hover:text-white-500 dark:bg-orange-500 dark:text-white-300">
            {theme == "light" ? <FaMoon /> : <FaSun />}
            <p className="hover:bg-orange-500 hover:text-white-500 dark:bg-orange-500 dark:text-white-300">{theme == "light" ? "Dark" : "Light"} Mode</p>
        </div>
    ) 
}