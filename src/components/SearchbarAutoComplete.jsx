/* eslint-disable */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { fetchDailyAndCurrentWeather } from '../action';

function SearchbarAutoComplete({ fetchDailyAndCurrentWeather }) {
  const [input, setInput] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchDailyAndCurrentWeather(lat, lng);
    setInput('');
  };

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const { lat, lng } = await getLatLng(results[0]);
    setLat(lat);
    setLng(lng);
    fetchDailyAndCurrentWeather(lat, lng);
    setInput('');
  };
  return (
    <div className="col-12 col-md-10 px-0">
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
            <form onSubmit={handleSubmit} className="d-flex w-100 mb-2 mt-2" style={{ maxWidth: '515px' }}>
              <input {...getInputProps({ placeholder: 'Enter a city' })} className="form-control search-input" />
              <button type="submit" className="btn search-btn">Search</button>
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
                    <div {...getSuggestionItemProps(suggestion, { style })} key={suggestion.placeId}>{suggestion.description}</div>
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

export default connect(null, { fetchDailyAndCurrentWeather })(SearchbarAutoComplete);
