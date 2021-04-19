import React from 'react';
import Searchbar from './Searchbar'
import { toggleTempScale } from '../action'
import { connect } from 'react-redux'
import sun from '../pic/sun.JPG';

function Header({tempScale,toggleTempScale}){
    const handleClick=()=>{
        toggleTempScale();
    }
    const celsiusFontColor = tempScale === 'celsius' ? 'coral' : 'white';
    const fahrenheitFontColor = tempScale === 'fahrenheit' ? 'coral' : 'white';

    return(
        <nav className="navbar navbar-dark bg-dark row mb-4 py-3 text-center">
            <div className="col-2 col-sm-2 text-center" >
                <img className='rounded' style={{maxWidth:'38px'}} src={sun} alt={'logo'}  />
            </div>
            <div className='col-6 d-block d-sm-none text-white website-title'>Andrew Weather</div>
            <div className="col-4 col-sm-2 my-1">
                <button onClick={handleClick} className="switch-btn" >
                    <span style={{ color:celsiusFontColor }}>°C</span> /{' '}
                    <span style={{ color:fahrenheitFontColor}}>°F</span>
                    <div className="button__horizontal"></div>
	                <div className="button__vertical"></div>
                </button>
            </div>
            <div className="col-sm-8 d-flex justify-content-center">
                <Searchbar />
            </div>
            
        </nav>
    )
}

const mapStateToProps = (state) => {
    return { tempScale: state.tempScale };
  };
  
  export default connect(mapStateToProps, { toggleTempScale })(Header);