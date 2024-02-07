import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/'}>Main</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/profile'}>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'}>About</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;