import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                {/* <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link> */}
                <Link to="/"><img className="header__icon" src="https://cdn-icons-png.flaticon.com/128/5977/5977585.png" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span><b>POPULAR</b></span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span><b>TOP RATED</b></span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span><b>UPCOMING</b></span></Link>
            </div>
        </div>
    )
}

export default Header