import { Link } from "react-router";

export default function Footer () {
    return (
        <footer className="bg-blue-800 text-white py-4 h-[45h] px-16 dark:bg-blue-600">
            <div className="container mx-auto md:px-8 flex flex-col md:flex-row  items-center ">
                <div >
               <div className="flex gap-[9px] ">
                 <p className="text-[15px] font-bold inline text-black bg-white w-[40px] h-[40px] rounded-[50%] flex justify-center items-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABgUlEQVR4AexUMU7DQBAcwwMQDRUS8AIegBCIL9BR0VDRUPANJApKCh5ASUEHNEiUSDwAClokGgoKjlnHZ0Y2Xh+xcVJktXO3t7vZSS5jz2FCNiMe7OKn4arDBhDeiNADbA7nNV+g/uIdti0SfbjNsXmNs5R4vrFrvII7T4mr4x+ZuPsFL8xF17r1x3xlD9v8+wyrseARHwEZm6vABUrTGtiPJrthwbDPPXePOG/4r6UjcbjlFRbAKf5gHYmxRa6IdcbJ3pU4UVz179OROFlcNeaOxLV5yQmPmGJR8cQY5SPxIyyrgf1INo/YxBKFo/uKTNe89UvJDz1iexOpeNpi6/fZpOoR802k4mmLwX4km0ecPGScRo+YYjHRpALsh9rS6BCKPT+95ysXJf7kWd3EouJpi61fP79H1Z8xcUlEf4iBEj/FZE/7AuccEpuE+TWQ3aMwJb5i7px4Jfr0Zw47IXaJ0oU4+wKyA2KZyHrEGmcdEx8QE2LJDhDOiAe45BHFNwAAAP//hYZe+AAAAAZJREFUAwCmgY096ND2FwAAAABJRU5ErkJggg=="/></p>
               <span className="inline-block font-bold justify-center items-center gap-2 flex text-xl hover:underline"> NEWS</span> 
               </div>
                    <div className="flex-col pt-6 gap-2 leading-7 text-lg">
                    <p className="hover:font-bold hover:underline cursor-pointer block">contact@todaynewsgmail.com</p>
                    <p className="hover:font-bold hover:underline cursor-pointer block">+43 5278 2883 884</p>
                    <p className="hover:font-bold hover:underline cursor-pointer block">www.kano.com</p>
                    </div> 
                </div>
                <div className="ml-[160px]">
            <h3 className="text-3xl font-bold mb-[20px] pt-[40px]">Featured</h3>
            <div className="text-lg">
                <Link className="nav-link hover:font-bold hover:underline cursor-pointer block" to="/home">Home</Link >
                <Link className="nav-link hover:font-bold hover:underline cursor-pointer block" to="/Tech">Tech</Link >
                <Link className="nav-link hover:font-bold hover:underline cursor-pointer block" to="/Politics">Politics</Link >
                <Link className="nav-link hover:font-bold hover:underline cursor-pointer block" to="/business">Business</Link >
                <Link className="nav-link hover:font-bold hover:underline cursor-pointer block" to="/health">Health</Link >
                <Link className="nav-link hover:font-bold hover:underline cursor-pointer block" to="/sports">Sport</Link >
            </div>
                </div>
                <div className="text-lg ml-[140px]">
                <h3 className="text-3xl font-bold mb-[20px]">
                +More
                </h3>
                  <p className="hover:font-bold hover:underline cursor-pointer block">Privacy Policy</p>
                  <p className="hover:font-bold hover:underline cursor-pointer block">Terms & Conditions</p>
                  <p className="hover:font-bold hover:underline cursor-pointer block">Contact Us</p>
                  <p className="hover:font-bold hover:underline cursor-pointer block">About Us</p>
                </div>
            </div>
        </footer>
            )}