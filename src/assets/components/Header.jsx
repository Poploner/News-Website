import { Link } from "react-router";

export default function Header () {

    return (
        <header className="px-[100px] bg-blue-800">
            <div>
                <p className="text-[1.75rem] font-bold inline text-black bg-white w-[70%] h-[10vh] rounded-[50%] flex justify-center items-center p-[10px] mr-[0.5rem] cursor-pointer">Today</p>
               <span className="inline-block text-white font-bold justify-center items-center gap-2 flex text-xl cursor-pointer"> NEWS</span>
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

}