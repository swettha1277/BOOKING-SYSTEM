import React, { useState } from 'react';
import { withRouter, useNavigate } from 'react-router-dom';
import Availability from './Availability';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
export default () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState({ from: '', to: '', date: '' });

  const [isValidated, setIsValidated] = useState(false);
  const [showError, setError] = useState(false);
  const updateValue = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  const searchForBuses = () => {
    setIsValidated(true);
    if (!search.from || !search.to || !search.date) {
      setError(true);
      console.log(search);
      return;
    }
    dispatch({ search, type: 'SEARCH_BUS' });
    navigate('availability');
  };

  return (
    <div
      class="search-container"
      className={
        isValidated ? 'was-validated search-container' : 'search-container'
      }
    >
      <h2> Search Buses</h2>
      {showError ? <p class="error-alert"> Please enter all values </p> : ''}
      <div class="form-group">
        <label>
          From:
          <input required type="text" name="from" onChange={updateValue} />
        </label>
      </div>

      <div class="form-group">
        <label>
          To:
          <input required type="text" name="to" onChange={updateValue} />
        </label>
      </div>

      <div class="form-group">
        <label>
          Date:
          <input required type="date" name="date" onChange={updateValue} />
        </label>
      </div>
      <button onClick={searchForBuses}><Link to='/Availability'> Search</Link> </button>
    </div>
  );
};
