import PropTypes from 'prop-types';
import { useState } from 'react';
import Toolbar from "./Toolbar";
import './Portfolio.css';

function Portfolio({ portfolio }) {

    const SHOW_ALL = 'All';

    const filters = portfolio.reduce((categories, item) => {
        if (categories.indexOf(item.category) === -1) categories.push(item.category);
        return [...categories];
    }, [SHOW_ALL]);

    const [currentFilter, setState] = useState(SHOW_ALL);

    const onSelectFilter = (filter) => {
        setState(filter);
    }

    return (
        <>
            <h1>Portfolio</h1>
            <Toolbar filters={filters} selected={currentFilter} onSelectFilter={onSelectFilter} />
            <div className="portfolio_tiles">
                {
                    (
                        (currentFilter === SHOW_ALL) ?
                            [...portfolio] :
                            portfolio.filter((item) => { return item.category === currentFilter })
                    ).map((item) => { return <img key={item.id} src={item.img} alt={item.category} /> })
                }
            </div>
        </>
    );
}

Portfolio.propTypes = {
    portfolio: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    })).isRequired
}

export default Portfolio;