import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchBarAutoComplete from './SearchBarAutoComplete';
import { toggleTempScale } from '../action';
import sun from '../pic/sun.JPG';

function Header({ tempState, toggleTemp }) {
  const handleClick = () => { toggleTemp(); };
  const celsiusFontColor = tempState === 'celsius' ? 'coral' : 'white';
  const fahrenheitFontColor = tempState === 'fahrenheit' ? 'coral' : 'white';

  return (
    <nav className="navbar navbar-dark bg-dark row mb-4 py-3 text-center px-0">
      <div className="col-8 col-sm-5 d-flex justify-content- align-items-center">
        <div className=" col-2 px-0">
          <img className="rounded" style={{ maxWidth: '38px' }} src={sun} alt="logo" />
        </div>
        <div className="col-9 text-white pl-0 d-sm-flex">Andrew Weather</div>
      </div>
      <div className="col-1 d-none d-sm-flex" />
      <div className="px-1 col-4 col-sm-1 my-1  d-sm-flex justify-content-end">
        <button type="button" onClick={handleClick} className="switch-btn col-12">
          <span style={{ color: celsiusFontColor }}>°C</span>
          {' '}
          /
          {' '}
          <span style={{ color: fahrenheitFontColor }}>°F</span>
        </button>
      </div>
      <div className="col-12 col-sm-5 d-flex justify-content-start">
        <SearchBarAutoComplete />
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
