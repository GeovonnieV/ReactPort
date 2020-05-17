import React from "react"
import {Link} from "react-router-dom"

function Nav() {

    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        background: "#A9A9A9",
        color: "#1db9b5"

    }

    
    return (
        <nav style={style}>
            <h3>logo</h3>
            <ul>
                {/* 1st link */}
                <Link to="/projects">
                <li>Projects</li>
                </Link>
                {/* 2nd link */}
                <Link to="/contact">
                <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav