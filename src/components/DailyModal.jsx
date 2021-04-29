import React from 'react';
import ReactDom from 'react-dom';
import moment from 'moment';

const DailyModal = ({ modalState, setModalState, modalInfo }) => {
  if (!modalState || !modalInfo) return null;
  const {
    sunrise, sunset, pop, humidity, dt, wind_speed: windSpeed,
  } = modalInfo;

  return ReactDom.createPortal(
    <>
      <div onClick={setModalState} className="overlay-layer" />
      <div className="dailyModal bg-dark col-8 col-md-4">
        <div className="d-flex justify-content-center align-items-center border pt-2 mb-3">
          <h5>{moment.unix(dt).format('DD-MMMM-YYYY')}</h5>
        </div>
        <div className="d-flex pb-2">
          <div className="col-5 d-flex flex-column align-items-start">
            <h6>Rain: </h6>
            <h6>Humidity:</h6>
            <h6>Wind:</h6>
            <h6>Sunrise:</h6>
            <h6>Sunset:</h6>
          </div>
          <div className="col-7 d-flex flex-column align-items-start">
            <h6>{`${(pop * 100).toFixed(0)}%`}</h6>
            <h6>{`${humidity}%`}</h6>
            <h6>
              {windSpeed}
              {' '}
              m/sec
            </h6>
            <h6>{moment.unix(sunrise).format('h:mm:ss a')}</h6>
            <h6>{moment.unix(sunset).format('h:mm:ss a')}</h6>
          </div>
        </div>

        <button type="button" className="modal-btn" onClick={setModalState}>Close</button>
      </div>
    </>,
    document.getElementById('portal'),
  );
};

export default DailyModal;
