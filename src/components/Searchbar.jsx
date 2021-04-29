import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDailyAndCurrentWeather } from '../action';

function SearchBar({ fetchWeather }) {
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(input);
    setInput('');
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex w-100 mb-2 mt-2" style={{ maxWidth: '515px' }}>
      <input onChange={handleChange} value={input} type="text" className="form-control search-input" placeholder="Enter a city" />
      <button type="submit" className="btn search-btn">Search</button>
    </form>
  );
}

SearchBar.propTypes = {
  fetchWeather: PropTypes.func.isRequired,
};

export default connect(null, { fetchWeather: fetchDailyAndCurrentWeather })(SearchBar);
