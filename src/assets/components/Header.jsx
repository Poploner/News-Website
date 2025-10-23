import { Link } from "react-router";

export default function Header () {

    return (
        <header className="px-[100px] bg-blue-800 dark:bg-blue-600 flex justify-between items-center sticky top-0 z-50">
            <div>
                <p className="text-[15px] mr-[1rem] font-bold inline text-black bg-white w-[40px] h-[40px] rounded-[50%] flex justify-center items-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABgUlEQVR4AexUMU7DQBAcwwMQDRUS8AIegBCIL9BR0VDRUPANJApKCh5ASUEHNEiUSDwAClokGgoKjlnHZ0Y2Xh+xcVJktXO3t7vZSS5jz2FCNiMe7OKn4arDBhDeiNADbA7nNV+g/uIdti0SfbjNsXmNs5R4vrFrvII7T4mr4x+ZuPsFL8xF17r1x3xlD9v8+wyrseARHwEZm6vABUrTGtiPJrthwbDPPXePOG/4r6UjcbjlFRbAKf5gHYmxRa6IdcbJ3pU4UVz179OROFlcNeaOxLV5yQmPmGJR8cQY5SPxIyyrgf1INo/YxBKFo/uKTNe89UvJDz1iexOpeNpi6/fZpOoR802k4mmLwX4km0ecPGScRo+YYjHRpALsh9rS6BCKPT+95ysXJf7kWd3EouJpi61fP79H1Z8xcUlEf4iBEj/FZE/7AuccEpuE+TWQ3aMwJb5i7px4Jfr0Zw47IXaJ0oU4+wKyA2KZyHrEGmcdEx8QE2LJDhDOiAe45BHFNwAAAP//hYZe+AAAAAZJREFUAwCmgY096ND2FwAAAABJRU5ErkJggg=="/></p>
               <span className="inline-block text-white font-bold justify-center items-center gap-2 flex text-xl hover:underline"> NEWS</span>
            </div>
            <div className="nav ml-[100px] ">
                <Link className="nav-link hover:font-bold  hover:scale-110" to="/">Home</Link >
                <Link className="nav-link hover:font-bold hoverr:scale-110" to="/Tech">Tech</Link >
                <Link className="nav-link hover:font-bold hoverr:scale-110" to="/Politics">Politics</Link >
                <Link className="nav-link hover:font-bold hoverr:scale-110" to="/business">Business</Link >
                <Link className="nav-link hover:font-bold hoverr:scale-110" to="/hailth">Health</Link >
                <Link className="nav-link hover:font-bold hoverr:scale-110" to="/sports">Sport</Link >
            </div>
        </header>
    )

      {/* Hamburger Icon (Mobile) */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          // Close icon (X)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger icon (☰)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Navigation Menu */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-[70px] left-0 w-full bg-blue-800 dark:bg-blue-600 md:static md:flex md:items-center md:gap-8 md:w-auto transition-all duration-300`}
      >
        <ul className="flex flex-col md:flex-row text-center md:text-left gap-4 md:gap-8 py-4 md:py-0">
          <li>
            <Link className="hover:font-bold hover:scale-110 block" to="/">Home</Link>
          </li>
          <li>
            <Link className="hover:font-bold hover:scale-110 block" to="/Tech">Tech</Link>
          </li>
          <li>
            <Link className="hover:font-bold hover:scale-110 block" to="/Politics">Politics</Link>
          </li>
          <li>
            <Link className="hover:font-bold hover:scale-110 block" to="/Business">Business</Link>
          </li>
          <li>
            <Link className="hover:font-bold hover:scale-110 block" to="/Hailth">Health</Link>
          </li>
          <li>
            <Link className="hover:font-bold hover:scale-110 block" to="/Sports">Sports</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
