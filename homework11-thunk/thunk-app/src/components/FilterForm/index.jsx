import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Funnel, XCircle } from 'react-bootstrap-icons';
import { filterServiceList } from '../../actions/actionCreators';

const FilterForm = () => {
  const [filterValue, setFilterValue] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(filterServiceList(filterValue));
  };

  const handleClearFilter = () => {
    setFilterValue('');
    dispatch(filterServiceList(''));
  };

  const handleFilterFieldChange = event => setFilterValue(event.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          name="filter"
          className="form-control"
          value={filterValue}
          onChange={handleFilterFieldChange}
        />
        <button className="btn btn-primary" type="submit">
          <Funnel />
        </button>
        <button
          className="btn btn-danger"
          type="button"
          onClick={handleClearFilter}
        >
          <XCircle />
        </button>
      </div>
    </form>
  );
};

export default FilterForm;
