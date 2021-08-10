import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchForPosting,
  changeServiceField,
  clearServiceForm
} from '../../actions/actionCreators';

const ServiceForm = () => {
  const item = useSelector(state => state.service);

  const dispatch = useDispatch();

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.valueAsNumber
      ? event.target.valueAsNumber
      : event.target.value;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(clearServiceForm());
    dispatch(fetchForPosting(item.id, item.name, item.price));
  };

  const handleCancel = () => dispatch(clearServiceForm());

  const cancelButtonVisibility = () =>
    item.name === '' && item.price === 0 ? 'invisible' : 'visible';

  return (
    <form className="py-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label w-100">
          Услуга
          <input
            className="form-control"
            type="text"
            name="name"
            value={item.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="mb-3">
        <label className="form-label w-100">
          Стоимость
          <input
            className="form-control"
            type="number"
            name="price"
            value={item.price}
            onChange={handleChange}
            min="0"
            step="0.01"
            required
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary me-3">
        Save
      </button>
      <button
        type="button"
        className={`btn btn-danger me-3 ${cancelButtonVisibility()}`}
        onClick={handleCancel}
      >
        Cancel
      </button>
    </form>
  );
};

export default ServiceForm;
