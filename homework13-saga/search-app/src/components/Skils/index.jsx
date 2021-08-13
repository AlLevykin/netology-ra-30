import { useSelector, useDispatch } from 'react-redux';
import { changeSearchField } from '../../actions';
import SkillList from '../SkillList';
import Alert from '../Alert';

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
                !hasQuery && <Alert type="info">Type something to search...</Alert>
            }
            {
                hasQuery && loading && <Alert type="warning">
                    <div className="spinner-grow spinner-grow-sm text-warning mx-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    searching...
                </Alert>
            }
            {
                error ?
                    <Alert type="danger">{error}</Alert>
                    :
                    <SkillList skills={items} />
            }
        </>
    )
}

export default Skills;