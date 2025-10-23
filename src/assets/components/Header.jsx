// import { Link } from "react-router";

// export default function Header () {

//     return (
//         <header className="px-[100px] bg-blue-800 dark:bg-blue-600 flex justify-between items-center sticky top-0 z-50">
//             <div>
//                 <p className="text-[15px] mr-[1rem] font-bold inline text-black bg-white w-[40px] h-[40px] rounded-[50%] flex justify-center items-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABgUlEQVR4AexUMU7DQBAcwwMQDRUS8AIegBCIL9BR0VDRUPANJApKCh5ASUEHNEiUSDwAClokGgoKjlnHZ0Y2Xh+xcVJktXO3t7vZSS5jz2FCNiMe7OKn4arDBhDeiNADbA7nNV+g/uIdti0SfbjNsXmNs5R4vrFrvII7T4mr4x+ZuPsFL8xF17r1x3xlD9v8+wyrseARHwEZm6vABUrTGtiPJrthwbDPPXePOG/4r6UjcbjlFRbAKf5gHYmxRa6IdcbJ3pU4UVz179OROFlcNeaOxLV5yQmPmGJR8cQY5SPxIyyrgf1INo/YxBKFo/uKTNe89UvJDz1iexOpeNpi6/fZpOoR802k4mmLwX4km0ecPGScRo+YYjHRpALsh9rS6BCKPT+95ysXJf7kWd3EouJpi61fP79H1Z8xcUlEf4iBEj/FZE/7AuccEpuE+TWQ3aMwJb5i7px4Jfr0Zw47IXaJ0oU4+wKyA2KZyHrEGmcdEx8QE2LJDhDOiAe45BHFNwAAAP//hYZe+AAAAAZJREFUAwCmgY096ND2FwAAAABJRU5ErkJggg=="/></p>
//                <span className="inline-block text-white font-bold justify-center items-center gap-2 flex text-xl hover:underline"> NEWS</span>
//             </div>
//             <div className="nav ml-[100px] ">
//                 <Link className="nav-link hover:font-bold  hover:scale-110" to="/">Home</Link >
//                 <Link className="nav-link hover:font-bold hoverr:scale-110" to="/Tech">Tech</Link >
//                 <Link className="nav-link hover:font-bold hoverr:scale-110" to="/Politics">Politics</Link >
//                 <Link className="nav-link hover:font-bold hoverr:scale-110" to="/business">Business</Link >
//                 <Link className="nav-link hover:font-bold hoverr:scale-110" to="/hailth">Health</Link >
//                 <Link className="nav-link hover:font-bold hoverr:scale-110" to="/sports">Sport</Link >
//             </div>
//         </header>
//     )
//   }
     
import { useState } from "react";
import { Link } from "react-router";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-[20px] md:px-[100px] bg-blue-800 dark:bg-blue-600 flex flex-col md:flex-row justify-between items-center sticky top-0 z-50 py-3">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center gap-2">
          <p className="text-[15px] font-bold inline text-black bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABgUlEQVR4AexUMU7DQBAcwwMQDRUS8AIegBCIL9BR0VDRUPANJApKCh5ASUEHNEiUSDwAClokGgoKjlnHZ0Y2Xh+xcVJktXO3t7vZSS5jz2FCNiMe7OKn4arDBhDeiNADbA7nNV+g/uIdti0SfbjNsXmNs5R4vrFrvII7T4mr4x+ZuPsFL8xF17r1x3xlD9v8+wyrseARHwEZm6vABUrTGtiPJrthwbDPPXePOG/4r6UjcbjlFRbAKf5gHYmxRa6IdcbJ3pU4UVz179OROFlcNeaOxLV5yQmPmGJR8cQY5SPxIyyrgf1INo/YxBKFo/uKTNe89UvJDz1iexOpeNpi6/fZpOoR802k4mmLwX4km0ecPGScRo+YYjHRpALsh9rS6BCKPT+95ysXJf7kWd3EouJpi61fP79H1Z8xcUlEf4iBEj/FZE/7AuccEpuE+TWQ3aMwJb5i7px4Jfr0Zw47IXaJ0oU4+wKyA2KZyHrEGmcdEx8QE2LJDhDOiAe45BHFNwAAAP//hYZe+AAAAAZJREFUAwCmgY096ND2FwAAAABJRU5ErkJggg=="
              alt="logo"
            />
          </p>
          <span className="inline-block text-white font-bold text-xl hover:underline">
            NEWS
          </span>
        </div>

        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      <nav
        className={`flex flex-col md:flex-row md:static w-full md:w-auto transition-all duration-300 bg-blue-600 ease-in-out ${
          menuOpen ? "max-h-[500px] mt-3" : "max-h-0 md:max-h-none overflow-hidden"
        }`}
      >
        <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-8 text-sm md:text-base text-white">
          <Link
            className="nav-link hover:font-bold hoverr:scale-110 "
            to="/"
          >
            Home
          </Link>
          <Link
            className="nav-link hover:font-bold hoverr:scale-110"
            to="/Tech"
          >
            Tech
          </Link>
          <Link
            className="nav-link hover:font-bold hoverr:scale-110"
            to="/Politics"
          >
            Politics
          </Link>
          <Link
            className="nav-link hover:font-bold hoverr:scale-110"
            to="/business"
          >
            Business
          </Link>
          <Link
            className="nav-link hover:font-bold hoverr:scale-110"
            to="/hailth"
          >
            Health
          </Link>
          <Link
            className="nav-link hover:font-bold hoverr:scale-110"
            to="/sports"
          >
            Sport
          </Link>
        </div>
      </nav>
    </header>
  );
}
