import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import { servicesRequest } from '../../actions';
import Alert from '../Alert';

const Services = () => {

    const { items, loading, error } = useSelector(state => state.services);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(servicesRequest());
    }, [dispatch]);

    const reloadHandler = () => dispatch(servicesRequest());    

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
                <button className="btn btn-danger mx-2" type="button"  onClick={reloadHandler}>Повторить запрос</button>
            </Alert>
        }
        {
            items.length > 0 ?
                <ul className="list-group list-group-flush">
                    {
                        items.map(service =>
                            <NavLink
                                key={service.id}
                                to={{
                                    pathname: `/services/${service.id}`,
                                    search: "",
                                    hash: "",
                                    state: null
                                }}
                                className="list-group-item list-group-item-action"
                                activeClassName="list-group-item list-group-item-action active"
                            >
                                {service.name}
                            </NavLink>
                        )
                    }
                </ul>
                :
                <></>

        }
    </>
}

export default Services;