import { NavLink } from "react-router-dom";

const Menu = ({ pages }) =>
    <nav className="menu">
        {
            pages.map((page) =>
                <NavLink
                    key={page.path}
                    to={page.path}
                    className="menu__item"
                    activeClassName="menu__item-active"
                    exact
                >
                    {page.caption}
                </NavLink>
            )
        }
    </nav>

export default Menu;