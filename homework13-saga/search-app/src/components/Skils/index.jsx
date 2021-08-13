import { useSelector, useDispatch } from 'react-redux';
import { changeSearchField } from '../../actions';

const Skills = () => {

    const { items, loading, error, search } = useSelector(state => state.skills);

    const dispatch = useDispatch();

    const handleSearch = evt => {
        const { value } = evt.target;
        dispatch(changeSearchField(value));
    };

    const hasQuery = search.trim() !== '';

    return (
        <>
            <div className="my-3">
                <label for="searchField" className="form-label">Search</label>
                <input type="search" className="form-control" id="searchField" value={search} onChange={handleSearch} />
            </div>
            {
                !hasQuery && <div className="alert alert-info my-3" role="alert">Type something to search</div>
            }
            {
                hasQuery && loading && <div className="alert alert-warning my-3" role="alert">
                    <div className="spinner-grow spinner-grow-sm text-warning mx-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    searching...
                </div>
            }
            {
                error ?
                    <div className="alert alert-danger my-3" role="alert">{error}</div>
                    :
                    <ul className="list-group">
                        {items.map(o => <li key={o.id} className="list-group-item">{o.name}</li>)}
                    </ul>
            }
        </>
    )
}

export default Skills;