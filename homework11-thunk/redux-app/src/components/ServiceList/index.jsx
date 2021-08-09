import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Trash, Pen } from 'react-bootstrap-icons';
import { removeService, editService, fetchServices } from '../../actions/actionCreators';
import { Status } from '../../actions/actionStatuses';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';

const ServiceList = () => {

  const data = useSelector(state => state.serviceList);

  const filter = useSelector(state => state.serviceFilter);

  const items = filter === '' ? data.items : data.items.filter(service => service.name.toLowerCase().includes(filter.toLowerCase()));

  const dispatch = useDispatch();

  useEffect(() => { fetchServices(dispatch) }, [dispatch]);

  const handleRemove = id => {
    dispatch(removeService(id));
  };

  const handleEdit = ({ id, name, price }) => {
    dispatch(editService(id, name, price));
  };

  const getViwe = () => {
    switch (data.status) {
      case Status.PENDING:
        return <Loader />
      case Status.ERROR:
        return <ErrorMessage text={data.errorText} />
      default:
        return (
          <ul className="list-group list-group-flush">
            {items.map(item => (
              <li className="list-group-item" key={item.id}>
                <span>
                  {item.name} {item.price}
                </span>
                <button
                  type="button"
                  className="btn btn-success ms-3"
                  onClick={() => handleEdit(item)}
                >
                  <Pen />
                </button>
                <button
                  type="button"
                  className="btn btn-danger ms-3"
                  onClick={() => handleRemove(item.id)}
                >
                  <Trash />
                </button>
              </li>
            ))}
          </ul>);
    }
  };

  return (getViwe());

};

export default ServiceList;
