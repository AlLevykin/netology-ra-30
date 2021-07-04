import PropTypes from 'prop-types';

function Toolbar({ filters, selected, onSelectFilter }) {
    return (
        <div className="portfolio_toolbar">
            {filters.map((filter) => {
                return (
                    <button
                        key={filter}
                        className={(filter === selected) ? 'portfolio_toolbar_selectedbutton' : ''}
                        onClick={() => onSelectFilter(filter)}>
                        {filter}
                    </button>
                );
            })}
        </div>
    );
}

Toolbar.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired
}

export default Toolbar;