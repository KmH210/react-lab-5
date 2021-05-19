import React from "react";
import { Link } from "react-router-dom";

function Header () {
    return (
        <header className="Header">
            <p>This is the header</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/stories">See Saved Stories</Link>
                    </li>
                    <li>
                        <a href="/create-story">Create a New Story</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;