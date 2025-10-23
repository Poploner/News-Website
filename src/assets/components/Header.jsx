import { Link } from "react-router";

export default function Header () {

    return (
        <header className="px-[100px] bg-blue-800 dark:bg-blue-600 flex justify-between items-center">
            <div>
                <h1 className="">Today<span className="web-name"> NEWS</span></h1>
            </div>
            <div className="nav ml-[100px] ">
                <Link className="nav-link hover:font-bold hover:underline hover:scale-110" to="/home">Home</Link >
                <Link className="nav-link hover:font-bold hover:underline hover:scale-110" to="/Tech">Tech</Link >
                <Link className="nav-link hover:font-bold hover:underline hover:scale-110" to="/Politics">Politics</Link >
                <Link className="nav-link hover:font-bold hover:underline hover:scale-110" to="/business">Business</Link >
                <Link className="nav-link hover:font-bold hover:underline hover:scale-110" to="/health">Health</Link >
                <Link className="nav-link hover:font-bold hover:underline hover:scale-110" to="/sports">Sport</Link >
            </div>
        </header>
    )

}