import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { fetchDailyAndCurrentWeather } from '../action';

function SearchBarAutoComplete({ fetchWeather }) {
  const [input, setInput] = useState('');
  const [curLat, setCurLat] = useState('');
  const [curLng, setCurLng] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(curLat, curLng);
    setInput('');
  };

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const { lat, lng } = await getLatLng(results[0]);
    setCurLat(lat);
    setCurLng(lng);
    fetchWeather(lat, lng);
    setInput('');
  };
  return (
    <div className="col-12 px-0">
      <PlacesAutocomplete
        value={input}
        onChange={setInput}
        onSelect={handleSelect}
        highlightFirstSuggestion
      >
        {({
          getInputProps, suggestions, getSuggestionItemProps, loading,
        }) => (
          <div style={{ position: 'relative' }}>
            <form onSubmit={handleSubmit} className="d-flex mb-2 mt-2" style={{ maxWidth: '515px' }}>
              <input {...getInputProps({ placeholder: 'Enter a city' })} className="form-control search-input" />
              <button type="submit" className="btn search-btn">
                <i className="fas fa-search" />
              </button>
            </form>
            {input ? (
              <div className="autocomplete-container">
                {loading ? <div>...loading</div> : null}
                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active ? '#eb6e4b' : 'white',
                    color: suggestion.active ? 'white' : 'black',
                    padding: '0 0.5rem',
                  };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, { style })}
                      key={suggestion.placeId}
                    >
                      { suggestion.description }
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}
SearchBarAutoComplete.propTypes = {
  fetchWeather: PropTypes.func.isRequired,
};

export default connect(null, { fetchWeather: fetchDailyAndCurrentWeather })(SearchBarAutoComplete);
