import { Link } from "react-router";

export default function Footer () {
    return (
        <footer className="bg-blue-800 text-white py-4 mt-8 h-[45h] px-16">
            <div className="container mx-auto md:px-8 flex flex-col md:flex-row gap-[300px] items-center ">
                <div>
               <div className="flex gap-[9px]">
                 <p className="text-[15px] font-bold inline text-black bg-white w-[50px] h-[50px] rounded-[50%] flex justify-center items-center">Today</p>
               <span className="inline-block font-bold justify-center items-center gap-2 flex text-xl hover:underline"> NEWS</span> 
               </div>
                    <div className="flex-col pt-6 gap-2 leading-7 text-lg">
                    <p className="hover:font-bold hover:underline cursor-pointer block">contact@todaynewsgmail.com</p>
                    <p className="hover:font-bold hover:underline cursor-pointer block">+43 5278 2883 884</p>
                    <p className="hover:font-bold hover:underline cursor-pointer block">www.kano.com</p>
                    </div> 
                </div>
                <div>
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
                <div className="text-lg">
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