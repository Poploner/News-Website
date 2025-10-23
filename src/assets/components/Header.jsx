import { Link } from "react-router";

export default function Header () {

    return (
        <header className="px-[100px] bg-blue-800 dark:bg-blue-600 flex justify-between items-center ">
            {/* sticky top-0 z-50 */}
            <div>
                <p className="text-[15px] mr-[1rem] font-bold inline text-black bg-white w-[40px] h-[40px] rounded-[50%] flex justify-center items-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAB2klEQVR4AexWvUoDQRCeOX8KRbCRGG0EWzHiGxgkEatESOE7CPoEgr2gheA7iBoRgnpNSsHOQivFLolgKxJibtzJuXtryF5W70yaHPsxk5lv57tbvhznQJ+ugXDPDr7/R53I3yzMbLiXybxbjgqew/PCjk89MQItE8FEGNm2x3N4XhhfCQ+ho/KwDba9bvPMYkjPQuS+HYj0KmpyBX2fL+s/4mzOXWJMFUrTsmEUdjw8qhYzO+1AwGu5We8xX9bbo4dwwBhtjqzJnlFYEv4rRhIW7j+U8Bza+s1NRhIWQikFwnmRW6+owlbm6nQ3kYRtzRW7cKeBtjXjE7NZpHH0SEDqL6HXmW8ryjyjMPhmCcwD0MqJMMEbv9GqiTwFPl+kdsss7L+JAvMAhOc+305VsIzC/CbSzdMtZ76YZ72MwtYT/kg0CrNZdPN0y5mv34MHOMm/53LlVuS8SfDOkaGEPXIaXFDwzRKYByA89/lqOxKtJnPudh0be6roDD/KXAnjEL7IYhyRAMYBIQcAiwKACHe1s/QD5wwlXDlN34qvhhIgvXEjLiBAjYhOxj4+d/WZShiEYqWY3a+eZwvCwStxoVLMbNYussdPV+t10C5NWKv2IB0I9+CQfYkvAAAA//93U1HoAAAABklEQVQDAJtMJUwyOqQzAAAAAElFTkSuQmCC"/></p>
               <span className="inline-block text-white font-bold justify-center items-center gap-2 flex text-xl hover:underline"> NEWS</span>
            </div>
            <div className="nav ml-[100px] ">
                <Link className="nav-link hover:font-bold hover:scale-110"  to="/">Home</Link >
                <Link className="nav-link hover:font-bold hoverr:scale-110" to="/Tech">Tech</Link >
                <Link className="nav-link hover:font-bold hoverr:scale-110" to="/Politics">Politics</Link >
                <Link className="nav-link hover:font-bold hoverr:scale-110" to="/business">Business</Link >
                <Link className="nav-link hover:font-bold hoverr:scale-110" to="/hailth">Health</Link >
                <Link className="nav-link hover:font-bold hoverr:scale-110" to="/sports">Sport</Link >
            </div>
        </header>
    )

}