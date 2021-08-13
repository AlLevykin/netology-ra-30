import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { detailsRequest } from '../../actions';
import Alert from '../Alert';

const Details = (props) => {

    const id = props.match.params.id;

    const { details, loading, error } = useSelector(state => state.details);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsRequest(id));
    }, [dispatch, id]);

    const reloadHandler = () => dispatch(detailsRequest(id));

    return <>
        {
            loading && <Alert type="warning">
                <div className="spinner-grow spinner-grow-sm text-warning mx-3" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                Loading...
            </Alert>
        }
        {
            error && <Alert type="danger">
                Произошла ошибка: {error}
                <button className="btn btn-danger mx-2" type="button" onClick={reloadHandler}>Повторить запрос</button>
            </Alert>
        }
        {
            details && <div className="card text-center">
                <div className="card-header">
                    <h4>
                        {details.name}
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            ID{details.id}
                        </span>
                    </h4>
                </div>
                <div className="card-body">
                    <p className="card-text">
                        {details.content}
                    </p>
                </div>
                <div className="card-footer text-muted">
                    Стоимость: {details.price}
                </div>
            </div>
        }
    </>
}

export default Details;