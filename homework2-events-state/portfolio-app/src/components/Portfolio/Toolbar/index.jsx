function Toolbar({ filters, selected, onSelectFilter }) {
    return (
        <div className="toolbar">
            {filters.map((filter) => {
                return (
                    <button
                        key={filter}
                        className={(filter === selected) ? 'toolbar_selectedbutton' : ''}
                        onClick={() => onSelectFilter(filter)}>{filter}
                    </button>
                );
            })}
        </div>
    );
}

export default Toolbar;