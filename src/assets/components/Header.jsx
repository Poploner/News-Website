import { useState } from "react";
import { NavLink } from "react-router";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-4 md:px-8 md:py-10 lg:px-10 bg-blue-800 dark:bg-blue-600 flex flex-col lg:flex-row justify-between items-center sticky top-0 z-50 py-3 w-full">
      <div className="flex items-center justify-between w-full lg:w-auto sm:py-12 ">
        <div className="flex items-center gap-2">
          <p className="text-[15px] font-bold text-black bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center ml-2">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABgUlEQVR4AexUMU7DQBAcwwMQDRUS8AIegBCIL9BR0VDRUPANJApKCh5ASUEHNEiUSDwAClokGgoKjlnHZ0Y2Xh+xcVJktXO3t7vZSS5jz2FCNiMe7OKn4arDBhDeiNADbA7nNV+g/uIdti0SfbjNsXmNs5R4vrFrvII7T4mr4x+ZuPsFL8xF17r1x3xlD9v8+wyrseARHwEZm6vABUrTGtiPJrthwbDPPXePOG/4r6UjcbjlFRbAKf5gHYmxRa6IdcbJ3pU4UVz179OROFlcNeaOxLV5yQmPmGJR8cQY5SPxIyyrgf1INo/YxBKFo/uKTNe89UvJDz1iexOpeNpi6/fZpOoR802k4mmLwX4km0ecPGScRo+YYjHRpALsh9rS6BCKPT+95ysXJf7kWd3EouJpi61fP79H1Z8xcUlEf4iBEj/FZE/7AuccEpuE+TWQ3aMwJb5i7px4Jfr0Zw47IXaJ0oU4+wKyA2KZyHrEGmcdEx8QE2LJDhDOiAe45BHFNwAAAP//hYZe+AAAAAZJREFUAwCmgY096ND2FwAAAABJRU5ErkJggg=="
              alt="logo"
            />
          </p>
          <span className="inline-block text-white font-bold text-xl cursor-pointer">
            NEWS
          </span>
        </div>

        <button
          className="lg:hidden text-white text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      <nav
        className={`transition-all duration-300 ease-in-out 
        flex flex-col items-center w-full 
        md:flex-col lg:flex-row 
        ${
          menuOpen
            ? "max-h-[600px] p-[20px] bg-blue-600/80 shadow-lg backdrop-blur-md rounded-lg"
            : "max-h-0 overflow-hidden lg:max-h-none"
        }
        lg:justify-between lg:items-center lg:bg-transparent lg:shadow-none lg:p-0`}
      >
        <div className=" md:text-[12px] lg:text-[15px] md:gap-2 flex flex-col lg:flex-row justify-between items-center w-full gap-6 text-white text-base px-4 lg:px-10">
          <NavLink className={({ isActive }) =>
      `hover:font-bold hover:scale-110 transition-all duration-200 ${
        isActive ? "text-yellow-400" : "text-white"
      }`
    } to="/">Home</NavLink>
           <NavLink className={({ isActive }) =>
      `hover:font-bold hover:scale-110 transition-all duration-200 ${
        isActive ? "text-yellow-400" : "text-white"
      }`
    } to="/Tech">Tech</NavLink>
           <NavLink className={({ isActive }) =>
      `hover:font-bold hover:scale-110 transition-all duration-200 ${
        isActive ? "text-yellow-400" : "text-white"
      }`
    } to="/Politics">Politics</NavLink>
           <NavLink className={({ isActive }) =>
      `hover:font-bold hover:scale-110 transition-all duration-200 ${
        isActive ? "text-yellow-400" : "text-white"
      }`
    } to="/business">Business</NavLink>
           <NavLink className={({ isActive }) =>
      `hover:font-bold hover:scale-110 transition-all duration-200 ${
        isActive ? "text-yellow-400" : "text-white"
      }`
    } to="/hailth">Health</NavLink>
           <NavLink className={({ isActive }) =>
      `hover:font-bold hover:scale-110 transition-all duration-200 ${
        isActive ? "text-yellow-400" : "text-white"
      }`
    } to="/sports">Sports</NavLink>
        </ div>
      </nav>
    </header>
  );
}
