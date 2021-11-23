import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div className="container">
                <ul>
                    <li>
                        <Link to = "/">Home</Link>
                    </li>
                    <li>
                        <Link to="/movie">Movie</Link>
                    </li>
                    <li>
                        <Link to="/people">People</Link>
                    </li>
                    <li>
                        <Link to="/tv">TV</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;

