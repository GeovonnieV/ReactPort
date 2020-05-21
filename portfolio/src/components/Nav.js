import React from "react"
import {Link} from "react-router-dom"

function Nav() {

    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        color: "#1db9b5",
        backgroundImage: "url(https://c4.wallpaperflare.com/wallpaper/847/890/558/line-grey-background-lines-fon-hd-wallpaper-preview.jpg)",
        

    }

    
    return (
        <nav style={style}>
            <h3>Geovonnies Portfolio</h3>
            <ul>
                {/* 1st link */}
                <Link to="/projects">
                <li>Projects</li>
                </Link>
                {/* 2nd link */}
                <Link to="/contact">
                <li>Contact</li>
                </Link>
                {/* 3rd link */}
                <Link to="/">
                <li>about</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav