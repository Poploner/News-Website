import { Link } from "react-router-dom"; // Use react-router-dom, not react-router

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-10 px-6 md:px-16 dark:bg-blue-600">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Logo & Contact */}
        <div>
          <div className="flex items-center gap-2">
            <p className="text-[15px] font-bold text-black bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABgUlEQVR4AexUMU7DQBAcwwMQDRUS8AIegBCIL9BR0VDRUPANJApKCh5ASUEHNEiUSDwAClokGgoKjlnHZ0Y2Xh+xcVJktXO3t7vZSS5jz2FCNiMe7OKn4arDBhDeiNADbA7nNV+g/uIdti0SfbjNsXmNs5R4vrFrvII7T4mr4x+ZuPsFL8xF17r1x3xlD9v8+wyrseARHwEZm6vABUrTGtiPJrthwbDPPXePOG/4r6UjcbjlFRbAKf5gHYmxRa6IdcbJ3pU4UVz179OROFlcNeaOxLV5yQmPmGJR8cQY5SPxIyyrgf1INo/YxBKFo/uKTNe89UvJDz1iexOpeNpi6/fZpOoR802k4mmLwX4km0ecPGScRo+YYjHRpALsh9rS6BCKPT+95ysXJf7kWd3EouJpi61fP79H1Z8xcUlEf4iBEj/FZE/7AuccEpuE+TWQ3aMwJb5i7px4Jfr0Zw47IXaJ0oU4+wKyA2KZyHrEGmcdEx8QE2LJDhDOiAe45BHFNwAAAP//hYZe+AAAAAZJREFUAwCmgY096ND2FwAAAABJRU5ErkJggg=="
                alt="logo"
                className="w-5 h-5"
              />
            </p>
            <span className="font-bold text-xl">NEWS</span>
          </div>

          <div className="flex flex-col pt-6 gap-2 leading-7 text-base md:text-lg">
            <p className="hover:font-bold cursor-pointer">contact@todaynewsgmail.com</p>
            <p className="hover:font-bold cursor-pointer">+43 5278 2883 884</p>
            <p className="hover:font-bold cursor-pointer">www.kano.com</p>
          </div>
        </div>

        {/* Featured Links */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Featured</h3>
          <div className="flex flex-col text-base md:text-lg gap-2">
            <Link className="hover:font-bold cursor-pointer" to="/">Home</Link>
            <Link className="hover:font-bold cursor-pointer" to="/Tech">Tech</Link>
            <Link className="hover:font-bold cursor-pointer" to="/Politics">Politics</Link>
            <Link className="hover:font-bold cursor-pointer" to="/business">Business</Link>
            <Link className="hover:font-bold cursor-pointer" to="/hailth">Health</Link>
            <Link className="hover:font-bold cursor-pointer" to="/sports">Sport</Link>
          </div>
        </div>

        {/* More Links */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">+More</h3>
          <div className="flex flex-col text-base md:text-lg gap-2">
            <p className="hover:font-bold cursor-pointer">Privacy Policy</p>
            <p className="hover:font-bold cursor-pointer">Terms & Conditions</p>
            <p className="hover:font-bold cursor-pointer">Contact Us</p>
            <p className="hover:font-bold cursor-pointer">About Us</p>
          </div>
        </div>
      </div>

      {/* Footer bottom line */}
      <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm md:text-base">
        © {new Date().getFullYear()} Today News. All rights reserved.
      </div>
    </footer>
  );
}
