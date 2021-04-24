import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchbarAutoComplete from './SearchbarAutoComplete';
import { toggleTempScale } from '../action';
import sun from '../pic/sun.JPG';

function Header({ tempState, toggleTemp }) {
  const handleClick = () => { toggleTemp(); };
  const celsiusFontColor = tempState === 'celsius' ? 'coral' : 'white';
  const fahrenheitFontColor = tempState === 'fahrenheit' ? 'coral' : 'white';

  return (
    <nav className="navbar navbar-dark bg-dark row mb-4 py-3 text-center">
      <div className="col-2 text-center d-block d-sm-flex justify-content-end">
        <img className="rounded" style={{ maxWidth: '38px' }} src={sun} alt="logo" />
      </div>
      <div className="col-6 d-block d-sm-none text-white">Andrew Weather</div>
      <div className="col-4 col-sm-2 my-1">
        <button type="button" onClick={handleClick} className="switch-btn w-100">
          <span style={{ color: celsiusFontColor }}>°C</span>
          {' '}
          /
          {' '}
          <span style={{ color: fahrenheitFontColor }}>°F</span>
          <div className="button__horizontal" />
          <div className="button__vertical" />
        </button>
      </div>
      <div className="col-12 col-sm-8 d-flex justify-content-center">
        <SearchbarAutoComplete />
      </div>
    </nav>
  );
}

Header.propTypes = {
  tempState: PropTypes.string.isRequired,
  toggleTemp: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ tempState: state.tempScale });

export default connect(mapStateToProps, { toggleTemp: toggleTempScale })(Header);
