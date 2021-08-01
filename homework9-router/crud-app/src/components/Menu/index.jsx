import { Link } from 'react-router-dom';

const Menu = () =>
    <nav className="navbar justify-content-end sticky-top bg-body border-bottom">
        <Link to="/posts/new" className="btn btn-primary">Создать пост</Link>
    </nav>;

export default Menu;