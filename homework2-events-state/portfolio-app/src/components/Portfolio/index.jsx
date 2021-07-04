import { useState } from 'react';
import Toolbar from "./Toolbar";
import './Portfolio.css';

function Portfolio({ portfolio }) {

    const INITIAL_FILTER = 'All'; 

    const filters = portfolio.reduce((categories, item) => { 
        if (categories.indexOf(item.category) === -1) categories.push(item.category);
        return [...categories];
    }, [INITIAL_FILTER]);

    const [currentFilter, setState] = useState(INITIAL_FILTER);

    const onSelectFilter = (filter) => {
        setState(filter);
    }

    return (
        <>
            <h1>Portfolio</h1>
            <Toolbar filters={filters} selected={currentFilter} onSelectFilter={onSelectFilter} />
        </>
    );
}

export default Portfolio;