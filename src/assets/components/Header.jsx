import { Link } from "react-router";

export default function Header () {

    return (
        <header>
            <div>
                <h1>Today<span className="web-name"> NEWS</span></h1>
            </div>
            <div className="nav">
                <Link className="nav-link" to="/Politics">Politics</Link >
                <Link className="nav-link" to="/Tech">Tech</Link >
                <Link className="nav-link" to="/business">Business</Link >
                <Link className="nav-link" to="/health">Health</Link >
                <Link className="nav-link" to="/sports">Sport</Link >
            </div>
        </header>
    )

}