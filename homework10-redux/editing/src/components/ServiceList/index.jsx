import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Trash, Pen } from 'react-bootstrap-icons';
import { removeService, editService } from '../../actions/actionCreators';

const ServiceList = () => {
  const data = useSelector(state => state.serviceList);

  const filter = useSelector(state => state.serviceFilter);

  const items = filter === '' ? data : data.filter(service => service.name.toLowerCase().includes(filter.toLowerCase()));

  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeService(id));
  };

  const handleEdit = ({ id, name, price }) => {
    dispatch(editService(id, name, price));
  };

  return items.length > 0 ? (
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
    </ul>
  ) : (
    <></>
  );
};

export default ServiceList;
