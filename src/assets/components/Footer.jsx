import { Link } from "react-router";

export default function Footer () {
    return (
        <footer className="bg-blue-800 text-white py-4 h-[45h] px-16 dark:bg-blue-600">
            <div className="container mx-auto md:px-8 flex flex-col md:flex-row  items-center ">
                <div >
               <div className="flex gap-[9px] ">
                 <p className="text-[15px] font-bold inline text-black bg-white w-[40px] h-[40px] rounded-[50%] flex justify-center items-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAB2klEQVR4AexWvUoDQRCeOX8KRbCRGG0EWzHiGxgkEatESOE7CPoEgr2gheA7iBoRgnpNSsHOQivFLolgKxJibtzJuXtryF5W70yaHPsxk5lv57tbvhznQJ+ugXDPDr7/R53I3yzMbLiXybxbjgqew/PCjk89MQItE8FEGNm2x3N4XhhfCQ+ho/KwDba9bvPMYkjPQuS+HYj0KmpyBX2fL+s/4mzOXWJMFUrTsmEUdjw8qhYzO+1AwGu5We8xX9bbo4dwwBhtjqzJnlFYEv4rRhIW7j+U8Bza+s1NRhIWQikFwnmRW6+owlbm6nQ3kYRtzRW7cKeBtjXjE7NZpHH0SEDqL6HXmW8ryjyjMPhmCcwD0MqJMMEbv9GqiTwFPl+kdsss7L+JAvMAhOc+305VsIzC/CbSzdMtZ76YZ72MwtYT/kg0CrNZdPN0y5mv34MHOMm/53LlVuS8SfDOkaGEPXIaXFDwzRKYByA89/lqOxKtJnPudh0be6roDD/KXAnjEL7IYhyRAMYBIQcAiwKACHe1s/QD5wwlXDlN34qvhhIgvXEjLiBAjYhOxj4+d/WZShiEYqWY3a+eZwvCwStxoVLMbNYussdPV+t10C5NWKv2IB0I9+CQfYkvAAAA//93U1HoAAAABklEQVQDAJtMJUwyOqQzAAAAAElFTkSuQmCC"/></p>
               <span className="inline-block font-bold justify-center items-center gap-2 flex text-xl"> NEWS</span> 
               </div>
                    <div className="flex-col pt-6 gap-2 leading-7 text-lg">
                    <p className="hover:font-bold cursor-pointer block">contact@todaynewsgmail.com</p>
                    <p className="hover:font-bold cursor-pointer block">+43 5278 2883 884</p>
                    <p className="hover:font-bold cursor-pointer block">www.kano.com</p>
                    </div> 
                </div>
                <div className="ml-[160px]">
            <h3 className="text-3xl font-bold mb-[20px] pt-[40px]">Featured</h3>
            <div className="text-lg">
                <Link className="nav-link hover:font-bold cursor-pointer block" to="/">Home</Link >
                <Link className="nav-link hover:font-bold cursor-pointer block" to="/Tech">Tech</Link >
                <Link className="nav-link hover:font-bold cursor-pointer block" to="/Politics">Politics</Link >
                <Link className="nav-link hover:font-bold cursor-pointer block" to="/business">Business</Link >
                <Link className="nav-link hover:font-bold cursor-pointer block" to="/hailth">Health</Link >
                <Link className="nav-link hover:font-bold cursor-pointer block" to="/sports">Sport</Link >
            </div>
                </div>
                <div className="text-lg ml-[140px]">
                <h3 className="text-3xl font-bold mb-[20px]">
                +More
                </h3>
                  <p className="hover:font-bold cursor-pointer block">Privacy Policy</p>
                  <p className="hover:font-bold cursor-pointer block">Terms & Conditions</p>
                  <p className="hover:font-bold cursor-pointer block">Contact Us</p>
                  <p className="hover:font-bold cursor-pointer block">About Us</p>
                </div>
            </div>
        </footer>
            )}